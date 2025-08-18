<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173"); // adjust for frontend
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

require_once("../db.php");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (empty($data['user_email']) || empty($data['product_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'User Email and Product ID(s) are required']);
    exit;
}

$user_email = $data['user_email'];
$product_ids = $data['product_id'];

// Ensure product_ids is always an array
if (!is_array($product_ids)) {
    $product_ids = [$product_ids];
}

// Get user_id from email
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $user_email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['status' => 'error', 'message' => 'User not found']);
    exit;
}

$userRow = $result->fetch_assoc();
$user_id = $userRow['id'];

$added = [];
$skipped = [];

// Loop through product IDs
foreach ($product_ids as $pid) {
    // Check if product exists
    $stmt = $conn->prepare("SELECT id FROM products WHERE id = ?");
    $stmt->bind_param("s", $pid);
    $stmt->execute();
    $prodRes = $stmt->get_result();

    if ($prodRes->num_rows === 0) {
        $skipped[] = ['id' => $pid, 'reason' => 'Product not found'];
        continue;
    }

    // Try inserting into wishlist
    $stmt = $conn->prepare("INSERT INTO wishlist (user_id, product_id) VALUES (?, ?)");
    $stmt->bind_param("is", $user_id, $pid);

    if ($stmt->execute()) {
        $added[] = $pid;
    } else {
        // If duplicate (because of UNIQUE constraint), mark as skipped
        $skipped[] = ['id' => $pid, 'reason' => $conn->error];
    }
}

// Response
echo json_encode([
    'status' => 'success',
    'added' => $added,
    'skipped' => $skipped
]);

$conn->close();
?>
