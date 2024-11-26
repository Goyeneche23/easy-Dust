<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "easy_dust";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql_temp = "SELECT m.ID_med_temp, m.ID_sensor_temp, m.temperatura, m.hora
             FROM medicion_temp m
             ORDER BY m.hora DESC LIMIT 1";
$result_temp = $conn->query($sql_temp);

$sql_polvo = "SELECT m.ID_med_polvo, m.ID_sensor_polvo, m.concentracion_polvo, m.hora
              FROM medicion_polvo m
              ORDER BY m.hora DESC LIMIT 1";
$result_polvo = $conn->query($sql_polvo);

$sql_hum = "SELECT m.ID_med_hum, m.ID_sensor_temp, m.humedad, m.hora
            FROM medicion_hum m
            ORDER BY m.hora DESC LIMIT 1";
$result_hum = $conn->query($sql_hum);

if ($result_temp->num_rows > 0 && $result_polvo->num_rows > 0 && $result_hum->num_rows > 0) {
    $temp_row = $result_temp->fetch_assoc();
    $polvo_row = $result_polvo->fetch_assoc();
    $hum_row = $result_hum->fetch_assoc();
    
    echo "temperatura, ID medicion: " . $temp_row["ID_med_temp"] . ", ID Sensor: " . $temp_row["ID_sensor_temp"] . ", valor: " . $temp_row["temperatura"] . ", hora: " . $temp_row["hora"] . "...<br>";
    echo "polvo, ID medicion: " . $polvo_row["ID_med_polvo"] . ", ID Sensor: " . $polvo_row["ID_sensor_polvo"] . ", valor: " . $polvo_row["concentracion_polvo"] . ", hora: " . $polvo_row["hora"] . "...<br>";
    echo "humedad, ID medicion: " . $hum_row["ID_med_hum"] . ", ID Sensor: " . $hum_row["ID_sensor_temp"] . ", valor: " . $hum_row["humedad"] . ", hora: " . $hum_row["hora"] . "...<br>";
} else {
    echo "No se encontraron datos...";
}

$conn->close();
?>
