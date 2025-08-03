<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("../db.php");

// Receive JSON data from frontend
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (!isset($data['username']) || !isset($data['email'])) {
    echo json_encode(['status' => 'error', 'message' => 'Username and Email are required']);
    exit;
}

$username = $conn->real_escape_string($data['username']);
$email = $conn->real_escape_string($data['email']);
$role = 'customer';  // Default Role

// Insert into database
$sql = "INSERT INTO users (name, email, role) VALUES ('$username', '$email', '$role')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success', 'message' => 'User added successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to add user']);
}

$conn->close();
?>
