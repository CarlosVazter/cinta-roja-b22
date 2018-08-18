// Funciones de orden superior


// Funciones callback

// Las funciones de ornde superior pueden recibir otras funciones, a las cuales se les concoe como callback.

/*let funcionDeOrdenSuperior = function(callback){
    console.log("Hola, soy la función de orden superior.");
    callback();
}


let funcionCallback = function(){
    console.log("Hola, soy la función callback");
}

funcionDeOrdenSuperior( funcionCallback );*/

// FILTER (Filtro)
// let animales = [
//     {nombre: "Heladio",   especie: "tortuga"},
//     {nombre: "Jose",      especie: "tigre"},
//     {nombre: "Carlos",    especie: "cuyo"},
//     {nombre: "Fabiola",   especie: "tortuga"},
//     {nombre: "Mauricio",  especie: "cuyo"},
//     {nombre: "Rogelio",   especie: "pato"}
// ]

// let cuyos = [];


// for (i = 0; i<animales.length; i++) {
//     if (animales[i].especie == "cuyo"){
//         cuyos.push(animales[i]);
//     }
// }

// console.log(cuyos);


// Utilizando un arrow function para filtrar un arreglo
// Si solo se pasa un parámetro, se puede prescindir de los parentésis.
// cuyos = animales.filter(animal => {
//     return animal.especie == "cuyo";
// })

// console.log(cuyos);


// MAP el resultado de una función aplicado a cada uno de los elementos de un arreglo.
let animales = [
    {nombre: "Heladio",   especie: "tortuga"},
    {nombre: "Jose",      especie: "tigre"},
    {nombre: "Carlos",    especie: "cuyo"},
    {nombre: "Fabiola",   especie: "tortuga"},
    {nombre: "Mauricio",  especie: "cuyo"},
    {nombre: "Rogelio",   especie: "pato"}
]

let patos = [];

// MANERA TRADICIONAL
for (i=0; i<animales.length; i++) {
    if (animales[i].especie == "pato"){
        patos.push(animales[i].nombre);
    }
}

console.log(patos);

// OCUPANDO MAP
patos = animales.map(function(animal){
    return animal.nombre;
});

console.log(patos);

