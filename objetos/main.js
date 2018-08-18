// Los parámetros son las cosas que van a ocupar las funciones para trabajar.
// let nombre = "Carlos";
// console.log("Hola " + nombre);

// con EcmaScript6 esta es la manera en que se pueden concatenar elementos.
// console.log(`Hola ${nombre}`);


// SCOPE - ALCANCE
/*function sum(num1, num2){
    return num1 + num2; // Si se utiliza un return dentro de las funciones, debemos de cachar ese valor y guardarlo en una variable o hacer algo con el. 
};*/

//console.log(sum(5,3))
// let resultado = 0;

// function sum (num1, num2) {
//     resultado = num1 + num2;
//     return resultado;
// }

// sum(4,7);
// console.log(resultado);


//arrow function. Es una manera en ecmasrcipt de poner una función dentro de una variable.
let funcionAnonima = () => {
    console.log("Soy una arrow function");
}

// funcionAnonima();

/*let esMayorDeEdad = (edad) => {
    if(edad >= 18){
        return "Es mayor de edad";
    } else {
        return "No es mayor de edad";
    }
}

console.log(esMayorDeEdad(19));*/

// OBJETOS 
// let miObjeto = {};

// console.log(miObjeto);

// PARADIGMA ESTRUCTURADO
function calcularSueldo(sueldo, horas, tarifas){
    return sueldo + (horas + tarifas); 
}


//PARADIGMA ORIENTADO OBJETOS
let empleado = {
    sueldo_base: 5000, //<= Parametros de los objetos.
    tarifa: 200,
    horas_extras: 4,
    calcular_sueldo: function(){ // Una función dentro de un objeto es un método.
        return this.sueldo_base + (this.horas_extra + this.tarifa)
    }
}

