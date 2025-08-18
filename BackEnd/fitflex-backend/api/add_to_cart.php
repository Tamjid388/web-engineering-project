<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once("../db.php");

$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (!isset($data['user_email']) || !isset($data['product_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'User Email and Product ID are required']);
    exit;
}

$user_email = $conn->real_escape_string($data['user_email']);
$product_id = $conn->real_escape_string($data['product_id']);
$quantity = isset($data['quantity']) ? intval($data['quantity']) : 1;

// Validate quantity
if ($quantity <= 0) {
    echo json_encode(['status' => 'error', 'message' => 'Quantity must be greater than 0']);
    exit;
}

// Get user_id from email
$userRes = $conn->query("SELECT id FROM users WHERE email = '$user_email'");
if ($userRes->num_rows == 0) {
    echo json_encode(['status' => 'error', 'message' => 'User not found']);
    exit;
}
$userRow = $userRes->fetch_assoc();
$user_id = $userRow['id'];

// Check if product exists
$productRes = $conn->query("SELECT id, stock FROM products WHERE id = '$product_id'");
if ($productRes->num_rows == 0) {
    echo json_encode(['status' => 'error', 'message' => 'Product not found']);
    exit;
}

$productRow = $productRes->fetch_assoc();
if ($productRow['stock'] < $quantity) {
    echo json_encode(['status' => 'error', 'message' => 'Insufficient stock available']);
    exit;
}

// Check if already exists in cart
$check = $conn->query("SELECT id, quantity FROM cart WHERE user_id = '$user_id' AND product_id = '$product_id'");
if ($check->num_rows > 0) {
    // Update existing cart item
    $cartRow = $check->fetch_assoc();
    $newQuantity = $cartRow['quantity'] + $quantity;
    
    if ($newQuantity > $productRow['stock']) {
        echo json_encode(['status' => 'error', 'message' => 'Cannot add more items than available stock']);
        exit;
    }
    
    if ($conn->query("UPDATE cart SET quantity = '$newQuantity' WHERE id = '{$cartRow['id']}'") === TRUE) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Cart updated successfully',
            'action' => 'updated',
            'new_quantity' => $newQuantity
        ]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to update cart']);
    }
} else {
    // Insert new cart item
    if ($conn->query("INSERT INTO cart (user_id, product_id, quantity) VALUES ('$user_id', '$product_id', '$quantity')") === TRUE) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Product added to cart successfully',
            'action' => 'added'
        ]);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to add to cart: ' . $conn->error]);
    }
}

$conn->close();
?>
