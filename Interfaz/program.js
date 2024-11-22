// program.js
function tempChange() {
    const estado = document.querySelector('.estado');
    const line = document.querySelector('.line');
    const circle = document.querySelector('.circle');
    
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

