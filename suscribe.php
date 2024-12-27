<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email address from the form data
    $email = $_POST["email"];

    // Database connection settings
    $servername = "127.0.0.1"; // Change this to your MySQL server address
    $username_db = "root"; // Change this to your MySQL username
    $password_db = "Yeyotenis11"; // Change this to your MySQL password
    $dbname = "my_database"; // Change this to your database name

    // Create connection
    $conn = new mysqli($servername, $username_db, $password_db, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
    $stmt->bind_param("s", $email);

    // Execute the statement
    if ($stmt->execute() === TRUE) {
        echo "Thank you for subscribing!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Form submission method not recognized.";
}
?>
