<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173"); // adjust for frontend
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
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
if (empty($data['email'])) {
    echo json_encode(['status' => 'error', 'message' => 'Email is required']);
    exit;
}

$email = $data['email'];

// Get user_id from email
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['status' => 'error', 'message' => 'User not found']);
    exit;
}

$userRow = $result->fetch_assoc();
$user_id = $userRow['id'];

// Fetch wishlist products (join with products table)
$stmt = $conn->prepare("
    SELECT p.id, p.name, p.description, p.price, p.discount, 
           p.category, p.brand, p.stock, p.rating, p.image, w.created_at
    FROM wishlist w
    JOIN products p ON w.product_id = p.id
    WHERE w.user_id = ?
    ORDER BY w.created_at DESC
");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$wishlist = [];
while ($row = $result->fetch_assoc()) {
    $wishlist[] = $row;
}

echo json_encode([
    'status' => 'success',
    'wishlist' => $wishlist
]);

$conn->close();
?>
