<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    $query = "INSERT INTO messages (name, email, message) VALUES ('$name', '$email', '$message')";

    if (mysqli_query($conn, $query)) {
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>
