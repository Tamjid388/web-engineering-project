<?php
include("../db.php");

header("Content-Type: application/json");

if (!isset($_GET['id'])) {
    echo json_encode(["error" => "Missing product ID"]);
    exit;
}

$productId = $_GET['id'];

// Get main product info
$productQuery = "SELECT * FROM products WHERE id = '$productId'";
$productResult = $conn->query($productQuery);

if ($productResult->num_rows === 0) {
    echo json_encode(["error" => "Product not found"]);
    exit;
}

$product = $productResult->fetch_assoc();

// Sizes
$sizes = [];
$sizeResult = $conn->query("SELECT size FROM product_sizes WHERE product_id = '$productId'");
while ($row = $sizeResult->fetch_assoc()) {
    $sizes[] = $row['size'];
}

// Colors
$colors = [];
$colorResult = $conn->query("SELECT color FROM product_colors WHERE product_id = '$productId'");
while ($row = $colorResult->fetch_assoc()) {
    $colors[] = $row['color'];
}

// Images
$images = [];
$imageResult = $conn->query("SELECT image_url FROM product_images WHERE product_id = '$productId'");
while ($row = $imageResult->fetch_assoc()) {
    $images[] = $row['image_url'];
}

// Reviews
$reviews = [];
$reviewResult = $conn->query("SELECT user, rating, comment FROM product_reviews WHERE product_id = '$productId'");
while ($row = $reviewResult->fetch_assoc()) {
    $reviews[] = $row;
}

// Delivery Info
$deliveryResult = $conn->query("SELECT * FROM product_delivery_info WHERE product_id = '$productId' LIMIT 1");
$delivery_info = $deliveryResult->fetch_assoc();

// Tags
$tags = [];
$tagResult = $conn->query("SELECT tag FROM product_tags WHERE product_id = '$productId'");
while ($row = $tagResult->fetch_assoc()) {
    $tags[] = $row['tag'];
}

// Combine
$product['sizes'] = $sizes;
$product['colors'] = $colors;
$product['images'] = $images;
$product['reviews'] = $reviews;
$product['delivery_info'] = $delivery_info;
$product['tags'] = $tags;

echo json_encode($product, JSON_PRETTY_PRINT);
?>
