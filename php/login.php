<?php
header('Content-Type: application/json');

// Database connection
$conn = new mysqli('localhost', 'root', '', 'react_native_app');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$username = $_POST['username'];
$password = $_POST['password'];

// Verify user credentials
$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo json_encode(array("message" => "Login successful"));
    } else {
        echo json_encode(array("error" => "Incorrect password"));
    }
} else {
    echo json_encode(array("error" => "User not found"));
}

$conn->close();
?>
