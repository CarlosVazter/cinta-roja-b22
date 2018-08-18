// EJERCICIO 1: Centigrados a Farenheit
// let centigrados = 20;
// let farenheit = 0;

// let convertir = (centigrados) => {
//     farenheit = (centigrados * (9/5))  + 32;
//     console.log(farenheit);
// }

// convertir(centigrados);


// // EJERCICIO 2: Tabla de multiplicar
// let numero = 4;
// let resultado = [];

// let tablaMultiplicar = (numero) => {
//     for (i=0; i <= 10; i++) {
//          resultado = numero * i;
//         console.log(resultado)
//     }  
// }

// tablaMultiplicar(numero);
  

// EJERCICIO 3: Leer un arreglo de enteros y sacar su promedio
let enteros = [2, 4, 6, 8, 10];


let suma = enteros.reduce((a,b) => a + b);
let resultado = suma / enteros.length;
console.log(resultado)
    