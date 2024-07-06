<?php
header('Content-Type: application/json');

// Database connection
$conn = new mysqli('localhost', 'root', '', 'react_native_app');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
$email = $_POST['email'];

// Insert user into database
$sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
if ($conn->query($sql) === TRUE) {
    echo json_encode(array("message" => "User registered successfully"));
} else {
    echo json_encode(array("error" => "Error: " . $sql . "<br>" . $conn->error));
}

$conn->close();
?>
