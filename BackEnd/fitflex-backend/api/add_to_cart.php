<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("../db.php");

$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (!isset($data['user_email']) || !isset($data['product_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'User Email and Product ID(s) are required']);
    exit;
}

$user_email = $conn->real_escape_string($data['user_email']);
$product_ids = $data['product_id']; // Can be array or single
$quantity = isset($data['quantity']) ? intval($data['quantity']) : 1;

// Ensure product_ids is array
if (!is_array($product_ids)) {
    $product_ids = [$product_ids];
}

// Get user_id from email
$userRes = $conn->query("SELECT id FROM users WHERE email = '$user_email'");
if ($userRes->num_rows == 0) {
    echo json_encode(['status' => 'error', 'message' => 'User not found']);
    exit;
}
$userRow = $userRes->fetch_assoc();
$user_id = $userRow['id'];

$added = [];
$skipped = [];

foreach ($product_ids as $pid) {
    $pid = $conn->real_escape_string($pid);

    // Check if already exists in cart
    $check = $conn->query("SELECT * FROM cart WHERE user_id = '$user_id' AND product_id = '$pid'");
    if ($check->num_rows > 0) {
        $skipped[] = $pid;
        continue;
    }

    // Insert into cart
    if ($conn->query("INSERT INTO cart (user_id, product_id, quantity) VALUES ('$user_id', '$pid', '$quantity')") === TRUE) {
        $added[] = $pid;
    } else {
        $skipped[] = $pid;
        error_log("MySQL Error: " . $conn->error);
    }
}

echo json_encode([
    'status' => 'success',
    'added' => $added,
    'skipped' => $skipped
]);

$conn->close();
?>
