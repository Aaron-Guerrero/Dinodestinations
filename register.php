<?php
$servername = "localhost";
$dbUsername = "root"; // The default XAMPP MySQL username
$dbPassword = ""; // The default XAMPP MySQL password is typically empty
$dbname = "DinoDestinations";

// Create connection
$conn = new mysqli($servername, $dbUsername, $dbPassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Rest of your code...


// Take the posted form data
$username = $_POST['username'];
$password = $_POST['password'];

// Hash the password for security
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $hashedPassword);

// Execute the prepared statement
if ($stmt->execute()) {
    echo "New user registered successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
