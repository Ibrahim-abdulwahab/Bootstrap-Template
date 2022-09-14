<?php

header('Access-Control-Allow-origin: *');
header('Content-type:application/json');
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
//$response["success"] = true;

echo json_encode($response);

?>