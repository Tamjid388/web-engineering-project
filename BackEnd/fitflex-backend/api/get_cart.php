<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

require_once("../db.php");

// Get request body
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (!isset($data['user_email']) || empty($data['user_email'])) {
    echo json_encode(['status' => 'error', 'message' => 'User Email is required']);
    exit;
}

$user_email = $conn->real_escape_string($data['user_email']);

// Get user_id from email
$userRes = $conn->query("SELECT id FROM users WHERE email = '$user_email'");
if (!$userRes || $userRes->num_rows === 0) {
    echo json_encode(['status' => 'error', 'message' => 'User not found']);
    exit;
}

$userRow = $userRes->fetch_assoc();
$user_id = (int)$userRow['id'];

// Fetch cart items with product details
$sql = "
    SELECT 
        c.product_id, 
        c.quantity, 
        p.name, 
        p.description, 
        p.price, 
        p.discount, 
        p.category, 
        p.brand, 
        p.stock, 
        p.rating, 
        p.image
    FROM cart c
    INNER JOIN products p ON c.product_id = p.id
    WHERE c.user_id = $user_id
";

$result = $conn->query($sql);

if (!$result) {
    echo json_encode(['status' => 'error', 'message' => 'Query failed', 'error' => $conn->error]);
    exit;
}

$cart = [];
while ($row = $result->fetch_assoc()) {
    $cart[] = $row;
}

echo json_encode([
    'status' => 'success',
    'cart' => $cart
]);

$conn->close();
?>
