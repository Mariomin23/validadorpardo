// 1. Buscamos los botones por la clase que pusiste en el HTML
const botones = document.querySelectorAll(".botonsemaforo");

// 2. IMPORTANTE: Como no tienes el ID "mensaje", vamos a buscarlo 
// o puedes añadir <p id="resultado"></p> en tu HTML.
// Aquí asumiremos que añades id="resultado" a un párrafo.
const textoPantalla = document.getElementById("mensajesemaforo");

// 3. Usamos un "Escuchador" para cada botón
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        
        // El switch debe estar AQUÍ DENTRO para que se ejecute al pulsar
        // Usamos boton.id para saber cuál se ha pulsado
        switch (boton.id) {
            case "semafororojo":
                textoPantalla.innerText = "Stop";
                textoPantalla.style.color = "red";
                console.log("Stop");
                break;
            case "semaforoambar":
                textoPantalla.innerText = "Cuidado";
                textoPantalla.style.color = "orange";
                console.log("Cuidado");
                break;
            case "semaforoverde":
                textoPantalla.innerText = "Adelante";
                textoPantalla.style.color = "green";
                console.log("Adelante");
                break;
        }
    });
});
















/*let semaforo = ["rojo", "ambar", "verde"];
let colorsemaforo = semaforo[1];
const textoPantalla = document.getElementById("mensaje");
const botones = document.querySelectorAll(".botonsemaforo");
document.addEventListener("click", () => {
    cambiarMensaje(botonsemaforo); 
});

switch (colorsemaforo) {
  case "semafororojo":
    textoPantalla.innerText = "Stop";
      textoPantalla.style.color = "red";
    console.log("Stop");
    break;
  case "semaforoambar":
    textoPantalla.innerText = "Cuidado";
      textoPantalla.style.color = "orange";
    console.log("Cuidado");
    break;
  case "semaforoverde":
    textoPantalla.innerText = "Adelante";
      textoPantalla.style.color = "green";
    console.log("Adelante");
}


});*/