// PRIMER EJERCICIO
class Electrodomestico {
    constructor(color, consumoEnergetico, peso){
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
        this.precio = 0; //Esto es un valor por default, aunque no se pase como parámetro si existe en el padre y los hijos lo heredaran.
    }
}

class Lavadora extends Electrodomestico {
    constructor (color, consumoEnergetico, peso, carga){
        super(color, consumoEnergetico, peso)
        this.carga = carga;
    }

    precioFinal() {
        this.precio = this.consumoEnergetico * this.carga

        return this.precio
    }
}

let lav = new Lavadora ("blanco", 20, 10, 5)
console.log(lav.precioFinal());


// SEGUNDO EJERCICIO
class Construccion {
    constructor (numPuertas, numVentanas, numPiso, direccion, altura, largo, ancho){
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPiso = numPiso;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }
}

class Casa extends Construccion {
    super (numPiso, numVentanas, numPiso, direccion, altura, largo, ancho)
}