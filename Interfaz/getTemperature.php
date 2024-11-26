<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "easy_dust"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT temperatura FROM medicion_temp ORDER BY ID_med_temp DESC LIMIT 1;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row); 
} else {
    echo json_encode(["medTemp" => null]);
}

$conn->close();
?>