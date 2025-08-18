<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

require_once(__DIR__ . '/../db.php');

$rawBody = file_get_contents("php://input");
$data = json_decode($rawBody, true);

if (!is_array($data)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON body']);
    exit;
}

if (!isset($data['user_email']) || !isset($data['product_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'User Email and Product ID(s) are required']);
    exit;
}

$userEmail = $data['user_email'];
$productIds = $data['product_id']; // Can be array or single value
$quantity = isset($data['quantity']) ? (int)$data['quantity'] : 1;

if (!is_array($productIds)) {
    $productIds = [$productIds];
}

// Fetch user id by email
$userId = null;
if ($stmt = $conn->prepare("SELECT id FROM users WHERE email = ? LIMIT 1")) {
    $stmt->bind_param('s', $userEmail);
    $stmt->execute();
    $stmt->bind_result($userId);
    $stmt->fetch();
    $stmt->close();
}

if (!$userId) {
    echo json_encode(['status' => 'error', 'message' => 'User not found']);
    exit;
}

$added = [];
$skipped = [];

// Prepare statements
$checkStmt = $conn->prepare("SELECT id FROM cart WHERE user_id = ? AND product_id = ? LIMIT 1");
$insertStmt = $conn->prepare("INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)");

foreach ($productIds as $pidRaw) {
    $pid = is_numeric($pidRaw) ? (int)$pidRaw : $pidRaw;

    // Check if already in cart
    $checkStmt->bind_param('ii', $userId, $pid);
    $checkStmt->execute();
    $checkStmt->store_result();

    if ($checkStmt->num_rows > 0) {
        $skipped[] = $pid;
        continue;
    }

    // Insert
    $insertStmt->bind_param('iii', $userId, $pid, $quantity);
    if ($insertStmt->execute()) {
        $added[] = $pid;
    } else {
        $skipped[] = $pid;
        error_log('MySQL Error (add_cart): ' . $conn->error);
    }
}

if (isset($checkStmt) && $checkStmt) { $checkStmt->close(); }
if (isset($insertStmt) && $insertStmt) { $insertStmt->close(); }

echo json_encode([
    'status' => 'success',
    'added' => $added,
    'skipped' => $skipped
]);

$conn->close();
?>

