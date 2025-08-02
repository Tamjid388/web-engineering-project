<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

require_once("../db.php");

// Fetch all users
$sql = "SELECT id, name, email, role FROM users";
$result = $conn->query($sql);

$users = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode(['status' => 'success', 'data' => $users]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'No users found']);
}

$conn->close();
?>
