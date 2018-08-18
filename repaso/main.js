// Variables
var saludo;

// En ecmascript la manera de llamar a las variables es de 2 formas: 
let hola; // es para variables
const cosa = 0; //es para constantes, datos que no nunca van a camabiar.

// Declaración de variable
let loqueyoquiera;
// Asignación de variable
loqueyoquiera = 1;

let numero = 10;
let caracter = "c";
let cadena = "hola mundo";
let booleano = false;

// Estructuras de control

// CONDICIONAL IF - ELSE
// let edad = 94;

// if ( edad >= 18) {
//     console.log("Eres mayor de edad");
// }else{
//     console.log("Eres menor de edad");
// };

// if (edad >= 60) {
//     console.log("Eres de la tercera edad");
// }else{
//     console.log("Aún eres joven")
// };


// if (fruta == "manzana") {
//     console.log("Es una", fruta)
// }


// SWITCH
// let fruta = "manzana";

// switch (fruta) {
//     case "manzana":
//         console.log("Es " + fruta);
//         break;
//     case "pera":
//         console.log("Es " + fruta);
//         break
//     case "platano":
//         console.log("Es " + fruta);
//         break
//     default:
//         console.log("No conozco esa fruta.")
// }

// Utilizando dos variables

// let edad = 10;
// let sexo = "F";

// Con el operado && se deben de cumplir forzosamente las dos.
// Con el operador || valida que se cumpla alguna de las dos.
// if ( edad >= 18 && sexo == "F" ) {
//     console.log("Es mayor de edad y mujer");
// }

// CICLOS FOR
// for (var i=0; i <= 100; i++){
//     console.log (i);
// }

// ARREGLOS
let arreglo = [];

arreglo = [
    "¿hola",
    "cómo",
    "estás?",
    "Ven",
    "te invito",
    "una copa"
]

// console.log(arreglo)

// for (i=0; i<=3; i++) {
//     console.log(arreglo[i]);
// }


// Cuando no conocemos la longitud del arreglo y entonces ocupamos length.
// for (i=0; i<arreglo.length; i++) {
//     console.log(arreglo[i]);
// }


// EJERCICIO

// A partir de una candea de texto, por ejemplo:

// var texto = "cadenita";

// Muestren en consola esa cadena pero convirtiendo las caracteres en una sucesión de minúsculas y mayúsculas, es decir:

// resultado -> "cAdENiTA";

var texto = "Hola mundo!"
var nuevaCadena = texto.split("");
var isUppercase = false;
var nuevoTexto = "";

for (i=0; i<nuevaCadena.length; i++) {
    if (nuevaCadena[i] != " ")
     isUppercase = !isUppercase;

    if (isUppercase){
        nuevaCadena[i]= nuevaCadena[i].toUpperCase();
        console.log(nuevaCadena);
    } 
}
    for (i=0; i<nuevaCadena.length; i++) {
           nuevoTexto = nuevoTexto + nuevaCadena[i]
    }
    console.log(nuevoTexto)