<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("../db.php");

// Receive JSON data
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['user_id']) || !isset($data['product_id']) || !isset($data['rating']) || !isset($data['comment'])) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
    exit;
}

$user_id = (int)$data['user_id'];
// $product_id = (int)$data['product_id'];
$product_id = $conn->real_escape_string($data['product_id']);
$rating = (int)$data['rating'];
$comment = $conn->real_escape_string($data['comment']);

// Insert into reviews table
$sql = "INSERT INTO reviews (user_id, product_id, rating, comment) VALUES ($user_id, '$product_id', $rating, '$comment')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success', 'message' => 'Review added successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to add review']);
}

$conn->close();
?>
