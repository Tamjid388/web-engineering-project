<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once("../db.php");


if (!isset($_GET['product_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'Product ID is required']);
    exit;
}

$product_id = (int)$_GET['product_id'];

// Fetch reviews with user info (JOIN)
$sql = "SELECT r.id AS review_id, r.rating, r.comment, r.created_at, 
               u.name AS user_name, u.email 
        FROM reviews r
        INNER JOIN users u ON r.user_id = u.id
        WHERE r.product_id = $product_id
        ORDER BY r.created_at DESC";

$result = $conn->query($sql);

$reviews = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $reviews[] = $row;
    }
    echo json_encode(['status' => 'success', 'data' => $reviews]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'No reviews found for this product']);
}

$conn->close();
?>
