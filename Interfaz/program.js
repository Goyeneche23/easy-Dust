// program.js

const estado = document.querySelector('.estado');
const line = document.querySelector('.line');
const circle = document.querySelector('.circle');
const dustState = document.querySelector('.indicadorDust')
const humState = document.querySelector('.indicadorHumedad')
const tempState = document.querySelector('.indicadorTemp')
const dust = document.getElementById("Dust");
const contenedor = document.querySelector('.baseDatos');


function tempChange() {
    if (estado.classList.contains('cold')) {
        estado.classList.remove('cold');
        estado.classList.add('hot');
        line.classList.add('hot');
        circle.classList.add('hot');
    } else {
        estado.classList.remove('hot');
        estado.classList.add('cold');
        line.classList.remove('hot');
        circle.classList.remove('hot');
    }
}

function estadoAHOT(){
    if (!estado.classList.contains('hot')) {
        estado.classList.remove('cold');
        estado.classList.add('hot');
        line.classList.add('hot');
        circle.classList.add('hot');
    }
}

function estadoACOLD(){
    if (!estado.classList.contains('cold')) {
        estado.classList.remove('hot');
        estado.classList.add('cold');
        line.classList.remove('hot');
        circle.classList.remove('hot');
    }
}

function acercaDe(){
    window.location.href = "https://github.com/Goyeneche23/easy-Dust";
}

function racksList() {
    const menuRacks = document.querySelector('.menuRacks');
    menuRacks.style.display = menuRacks.style.display === 'none' ? 'block' : 'none';
}

function loggeado(){
    window.location.href= "index.html";
}

function logIn(){
    window.location.href = "log.html";
}

function refreshMenu(){
    window.location.href = "";
}

function verifLog(){
    
}

function showSnow() {
    dust.style.display = "block";
}  
  // Ocultar nieve
function hideSnow() {
    dust.style.display = "none";
}

function redHum(){
    humState.style.backgroundImage = "linear-gradient(62deg, #FF512F, #DD2476)";
}

function blueHum(){
    humState.style.backgroundImage = "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";
}

function redDust(){
    dustState.style.backgroundImage = "linear-gradient(62deg, #FF512F, #DD2476)";

}

function blueDust(){
    dustState.style.backgroundImage = "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";
}

function redTemp(){
    tempState.style.backgroundImage = "linear-gradient(62deg, #FF512F, #DD2476)";
}

function blueTemp(){
    tempState.style.backgroundImage = "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";
}

function checkTemp() {
    fetch('getTemperature.php')
        .then(response => response.json())
        .then(data => {
            if (data.temperatura !== null) {
                const temperatura = parseFloat(data.temperatura);

                const valor = document.getElementById('tempValue');
                valor.textContent = `${temperatura} °C`;

                if (temperatura > 29) {
                    redTemp();
                    estadoAHOT();
                } else {
                    blueTemp();
                    estadoACOLD();
                }
            } 
        })
}

function checkDust() {
    fetch('getDust.php')
        .then(response => response.json())
        .then(data => {
            if (data.concentracion_polvo !== null) {
                const concentracion_polvo = parseFloat(data.concentracion_polvo);

                const valor = document.getElementById('dustValue');
                valor.textContent = `${concentracion_polvo} mg/m3`;

                if (concentracion_polvo > 2) {
                    redDust();
                    showSnow();
                } else {
                    blueDust();
                    hideSnow();
                }
            } 
        })
}

function checkHum() {
    fetch('getHumedad.php')
        .then(response => response.json())
        .then(data => {
            if (data.humedad !== null) {
                const humedad = parseFloat(data.humedad);

                const valor = document.getElementById('humValue');
                valor.textContent = `${humedad} ml`;

                if (humedad > 59) {
                    redHum();
                } else {
                    blueHum();
                }
            } 
        })
}


function datosCompletos() { 
    fetch('getData.php')  
        .then(response => response.text())
        .then(data => {
            if (contenedor.children.length >= 8) {
                // Eliminar todos los elementos 
                contenedor.innerHTML = '';
            }
            // Crear un nuevo elemento 
            const newRow = document.createElement('div');
            newRow.classList.add('data');
            newRow.innerHTML = data;

            contenedor.appendChild(newRow);
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

hideSnow();

setInterval(datosCompletos, 10000);

setInterval(checkTemp, 5000);
setInterval(checkDust, 5000);
setInterval(checkHum, 5000);


