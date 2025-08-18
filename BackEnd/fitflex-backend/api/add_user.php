<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

require_once("../db.php");

$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (!isset($data['username']) || !isset($data['email'])) {
    echo json_encode(['status' => 'error', 'message' => 'Username and Email are required']);
    exit;
}

$username = $conn->real_escape_string($data['username']);
$email = $conn->real_escape_string($data['email']);
$role = 'customer';

// Check if email already exists
$check = $conn->query("SELECT * FROM users WHERE email = '$email'");
if ($check->num_rows > 0) {
    echo json_encode(['status' => 'success', 'message' => 'User already exists']);
    exit;
}

// Insert (without firebase_uid)
$sql = "INSERT INTO users (name, email, role) VALUES ('$username', '$email', '$role')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success', 'message' => 'User added successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to add user']);
}

$conn->close();
?>
