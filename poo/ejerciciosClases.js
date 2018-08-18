class Persona {
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    indiceMasa(){
        return this.peso / Math.pow(this.altura, 2);
    }

    esMayor(){
        if (this.edad >= 18){
            console.log(`${this.nombre} es mayor de edad`)
        }
    }

    generarRFC(){
        return this.rfc = this.nombre + this.edad + this.sexo;
    }
}

let carlos = new Persona("Carlos", 32, "Masculino", 78, 1.7);



class Cuenta {
    constructor(titular, cantidad){
        this.titular = titular;
        this.cantidad = cantidad;
    }

    depositar(nuevaCantidad){
        if (nuevaCantidad + this.cantidad <= 900) {
            this.cantidad = this.cantidad + nuevaCantidad
            console.log (`Depósito exitoso, nuevo saldo: $${this.cantidad}.`)
        } else {
            console.log(`El saldo actual de la cuenta es de $${this.cantidad}.`)
            console.log(`Depósito no permitido. Al depósitar $${nuevaCantidad} la cuenta excedería del saldo autorizado por $900.`)
        } 
    }

    retirar(cantidadRetirar) {
        if (this.cantidad - cantidadRetirar < 10){
            console.log(`Retiro no permitido. La cuenta no puede tener menos de $10 en saldo.`)
            console.log(`Saldo actual: $${this.cantidad}.`)
            console.log(`Retiro intentado: $${cantidadRetirar}`)
        } else {
            this.cantidad = this.cantidad - cantidadRetirar;
            console.log(`Retiro: $${cantidadRetirar}.`)
            console.log(`Saldo final: $${this.cantidad}.`)
        }
    }

    consultarSaldo(){
        console.log(`El saldo actual es de: $${this.cantidad}.`)
    }
}

 //Creacion de nueva cuenta
let nuevoCliente = new Cuenta("Carlos", 100);
/*
// Verificación de saldo
nuevoCliente.consultarSaldo();

// Haciendo un depósito
console.log(nuevoCliente.depositar(600));

// Verificando el saldo
nuevoCliente.consultarSaldo();

// Haciendo un retiro
console.log(nuevoCliente.retirar(91));*/