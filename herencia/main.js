var variable= "Se puede ejecutar en culquier  parte";

let otrVariable = "Let solo se puede ejecutar en el scope donde se declara, en este ejemplo no podre mandar a llamar otraVarianle dentro de la clase.";

// HERENCIA
// class Animal {
//     constructor(nombre, peso){
//         this.nombre = nombre;
//         this.peso = peso;
//         console.log("Se creo animal");   
//     }
    
//     getNombre(){
//         return this.nombre
//     }

//     comer (comida) {
//         return `Mi animal esta comiendo ${comida}`
//     }
// }

/* Con extends hacemos que la nueva clase herede los atributos y métodos de la clase Animal. */

// class Perro extends Animal {
//     constructor(nombre, peso, raza, color){
//         super(nombre, peso) // Con super mando a llamar el constructor de la clase padre.
//         this.raza = raza;
//         this.color = color;
//         console.log("Se creo un perro");
//     }

//     ladrar(){
//         return "wof, wof, wof!!"
//     }
// }

// let pug = new Perro ("Solovino", 2, "Pug", "Beige");

// console.log(pug.getNombre());
// console.log(pug.ladrar());
// console.log(pug.comer("carne"));




/*
// Ejemplo clases
class Largometraje {
    constructor(tiempo){
        this.tiempo = tiempo;
    }

    // Este método se declara porque otra clase -que en este caso es Cine- realiza un método que ocupa un atributo de esta clase - que es tiempo-.
    getTime(){
        return this.tiempo;
    }
}


class Pelicula extends Largometraje {
    constructor(tiempo, genero) {
        super(tiempo);
        this.genero = genero;
    }
}


class Documental extends Largometraje {
    constructor(tiempo, director) {
        super(tiempo);
        this.director = director;
    }
}



class Cine {
    constructor(algoParaReproducir){
        this.algoParaReproducir = algoParaReproducir;

    }

    reproducir(){
        return `Reproduciendo... ${this.algoParaReproducir.getTime()}`;
    }
}


let doc = new Documental(90, "Pedro Torres");
let peli = new Pelicula(120, "Acción");

let sala1 = new Cine(doc);
let sala2 = new Cine(peli);

console.log(sala1.reproducir());
console.log(sala2.reproducir()); */




/* class Rectangulo {
    constructor(alto,ancho){
        this.ancho = ancho
        this.alto = alto
    }
    getAncho(){
        return this.ancho;
    }
    getAlto(){
        return this.alto
    }
    setAncho(nuevoAncho){
        this.ancho = nuevoAncho
    }
    setAlto(nuevoAlto){
        this.alto = nuevoAlto
    }
    calcularArea(){
        return this.ancho*this.alto
    }
}
let rect = new Rectangulo(12,45);
console.log(rect.calcularArea())
class Cuadrado extends Rectangulo{
    constructor(lado,lado1){
        super(lado,lado1)
    }
}
 */
class Figura {
    constructor(ladoA,ladoB){
        this.ladoA = ladoA
        this.ladoB = ladoB
    }
     calcularArea(){
        if(this.ladoA == this.ladoB){
            return this.ladoA*this.ladoA
        }else{
            return this.ladoA*this.ladoB
        }
     }
}
class Rectangulo extends Figura{
    constructor(alto,ancho){
        super(alto,ancho)
    }
}

class Cuadrado extends Figura{
    constructor(lado){
        super(lado,lado)
    }
}
let  cuadrado1  = new Cuadrado(12)
let rect = new Rectangulo(15,12)
console.log(
    cuadrado1.calcularArea()
)
console.log(
    rect.calcularArea()
)

