const validarAcceso = () => {

    
    const nombre = prompt("¿Cómo te llamas?");
    
    
    if (nombre === "" || nombre === null) {
        alert(" Error: ¡Debes escribir un nombre!");
        return; 
    }

    const edad = parseInt(prompt("¿Cuántos años tienes?"));

   
    if (nombre === "Admin") {
        alert(" ¡Bienvenido, Jefe! Pase directamente.");
    } 
    else if (edad >= 18) {
        alert(`Acceso concedido para ${nombre}.`);
    } 
    else {
        const faltan = 18 - edad;
        alert(` Eres menor, ${nombre}. Te faltan ${faltan} años.`);
    }
};


validarAcceso();
























/*let edad=parseInt (prompt("Que edad tienes?"))
let nombre=prompt("Escribe tu nombre")

if nombre===(""){
    console.error("error"),
}
else if nombre==="admin"{
    console.log("Eres el administrador")
}
*/