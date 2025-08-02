<?php
$host = "localhost";
$username = "root";  // Your DB username
$password = "";      // Your DB password
$dbname = "fitflex_db";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
