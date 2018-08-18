/*
Crear una funcion de orden superior llamada saluda() que reciba dos parametros, "mensaje" y "formato".
"formato" sera una funcion callback que imprima "mensaje" en minúsculas o en mayúsculas
*/

/* Función orden superior
let saluda = (mensaje, formato) => {
    formato(mensaje);
}

Función callback//
let mayusculas = (mensaje) => {
    console.log(mensaje.toUpperCase());
} 

saluda("Hola mundo!", mayusculas) */


// EJERCICIO 1
let cadenas = [
    "Hola amigos",
    "Cinta roja cdmx y gdl",
    "yei"
]
let resultado =[];


let miFuncion = (str) => {
    let nuevaCadena = str.split(" ");
    let isUppercase = false;
    let nuevoTexto = "";

    for (i=0; i<nuevaCadena.length; i++) {
        isUppercase = !isUppercase;

    if (isUppercase){
        nuevaCadena[i]= nuevaCadena[i].toUpperCase();
        } else {
        nuevaCadena[i] = nuevaCadena[i].toLowerCase();
    }
}
    for (i=0; i<nuevaCadena.length; i++) {
        if (i == 0)
            nuevoTexto = nuevoTexto + nuevaCadena[i] 
        else 
            nuevoTexto = nuevoTexto + " " + nuevaCadena[i]
    }

    return nuevoTexto 
}


for (j=0; j<cadenas.length; j++){
    resultado.push(miFuncion(cadenas[j]))
}


console.log(resultado);


// EJERCICIO 2
let tiempos = [120, 80, 200, 100];
let res = [];

tiempos.forEach(time => {
    if(time/60 >= 2){
        time = res.push(time);
    }
})

// console.log(res);


// EJERCICIO 3 (forma 1)
let numbers = [1, 3, 5, 7, 9];
let multi = 0;
let result = [];

/* let multiplicar = (input) => {
    for (i=0; i<=input.length; i++){
          multi = input[i] * 7;

        if(multi <= 30){
            multi = result.push(multi);
        }
    }
}

multiplicar(numbers);
console.log(result); */




// EJERCICIO 3 (forma 2)
numbers.forEach(input => {
    
    multi = input * 7;
    
    if(multi <= 30){
        multi = result.push(multi);
    }
})

// console.log(result);