<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header("Access-Control-Allow-Credentials: true");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}




include("../db.php");




header("Content-Type: application/json");

$products = [];

// Get all products
$productQuery = "SELECT * FROM products";
$productResult = $conn->query($productQuery);

if ($productResult->num_rows === 0) {
    echo json_encode(["error" => "No products found"]);
    exit;
}

while ($product = $productResult->fetch_assoc()) {
    $productId = $product['id'];

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
    $delivery_info = null;
    $deliveryResult = $conn->query("SELECT * FROM product_delivery_info WHERE product_id = '$productId' LIMIT 1");
    if ($deliveryResult->num_rows > 0) {
        $delivery_info = $deliveryResult->fetch_assoc();
    }

    // Tags
    $tags = [];
    $tagResult = $conn->query("SELECT tag FROM product_tags WHERE product_id = '$productId'");
    while ($row = $tagResult->fetch_assoc()) {
        $tags[] = $row['tag'];
    }

    // Combine all
    $product['sizes'] = $sizes;
    $product['colors'] = $colors;
    $product['images'] = $images;
    $product['reviews'] = $reviews;
    $product['delivery_info'] = $delivery_info;
    $product['tags'] = $tags;

    $products[] = $product;
}

echo json_encode($products, JSON_PRETTY_PRINT);
?>
