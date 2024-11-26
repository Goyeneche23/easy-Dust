<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "easy_dust"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT humedad FROM medicion_hum ORDER BY ID_med_hum DESC LIMIT 1;"; 
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row); 
} else {
    echo json_encode(["medHum" => null]);
}

$conn->close();
?>