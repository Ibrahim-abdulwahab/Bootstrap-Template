<?php

header('Access-Control-Allow-Origin: *');


include("connection.php");

//header('Content-type:application/json');

$query = $mysqli->prepare("SELECT message FROM contact");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>
