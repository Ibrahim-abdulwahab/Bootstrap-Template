<?php
include("connection.php");

$fullname = $_POST["fullname"];
$email = $_POST["email"];
$phonenumber=$_POST["phonenumber"];
$message=$_POST["message"];

$query = "INSERT INTO contact(fullname, email, phonenumber, message) VALUE (" . $fullname .", ?, ?, ?)";

$query = $mysqli->prepare("INSERT INTO contact(fullname, email, phonenumber, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $fullname, $email, $phonenumber, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>