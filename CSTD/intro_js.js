//COMANDOS EN LA VISTA DE LA CONSOLA
console.log("Hola");
console.info("COLOCA INFORMACIÓN IMPORTANTE");
console.warn("COLOCAR ADVERTENCIAS"); 
console.error("COLOCAR ERRORES");

//VARIABLES Y CONSTANTES
var zapatos = 20; // Vieja forma de declarar  -  Variable global.
let bolsas = 55;  // Nueva forma de declarar  -  Solo se usa en el método declarado.

const precio = 64; // Las constantes evitan que puedan ser modificadas por personas externas.

//ALERT, PROMPT, CONFIRM
alert("Bienvenidos!");
const sesion = confirm("¿Ya tienes una cuenta?");
if(sesion){
    prompt("Vamos iniciar sesión en tu cuenta :)");
}else{
    prompt("Vamos a crear una nueva cuenta :D");
}

//FUNCIONES MODERNAS
//(condición) => {cuerpo del código}       Función anonima
let pagar = (costo) => {
    console.log("Pago realizado de: " + costo);
}

pagar(50); //Llamando a la función

//ARREGLOS
const arreglo = ["Adidas"];
const arreglo2 = new Array();//Al ser "const" la dirección de memoria no se puede cambiar, pero si lo que tenga ->
arreglo.push("Converse");
