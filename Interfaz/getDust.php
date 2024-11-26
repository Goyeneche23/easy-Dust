<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "easy_dust"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT concentracion_polvo FROM medicion_polvo ORDER BY ID_med_polvo DESC LIMIT 1;"; // Ajusta "tu_tabla" e "id" según tu estructura
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row); 
} else {
    echo json_encode(["medDust" => null]); 
}

$conn->close();
?>