<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("../db.php");

$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (empty($data['username']) || empty($data['email'])) {
    echo json_encode(['status' => 'error', 'message' => 'Username and Email are required']);
    exit;
}

$username = trim($data['username']);
$email = trim($data['email']);
$uid = isset($data['uid']) ? trim($data['uid']) : null;
$role = 'customer';

// Check if email already exists
$check = $conn->prepare("SELECT id FROM users WHERE email = ?");
$check->bind_param("s", $email);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'User already exists']);
    exit;
}

// Insert new user
$stmt = $conn->prepare("INSERT INTO users (name, email, firebase_uid, role) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $username, $email, $uid, $role);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'User added successfully', 'user_id' => $stmt->insert_id]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to add user']);
}

$stmt->close();
$conn->close();
?>
