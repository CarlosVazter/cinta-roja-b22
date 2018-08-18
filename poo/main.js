// CLASES
// Cada vez que se crea un nuevo objeto a partir de una clase se le conoce como // //"Instanciar", es decir, el objeto creado a partir de la clase es una "Instancia".

class Perro {
    constructor(nombre, raza, edad){ // En el constructor se establecen los parámetros que tendra la clase.
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
   }
   
   ladrar(){ // Método ladrar
       return "woof woof woof"
   }

   comer(comida){ // Método comer
       return `${this.nombre} esta comiendo ${comida}`
   }
}

/*Para crear una nueva instacia (objeto) ocupamos una variable y dentro de ella la palabra new.*/
let ayudanteDeSanta = new Perro("Ayudante de Santa", "Galgo", 7);

console.log(ayudanteDeSanta.comer("croquetas"));