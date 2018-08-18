const request = require('request');

// Sintaxis de una promesa
/* let promise = new Promise (function(resolve, reject){
    // Las promesas tiene tres estados:
    // pendiente, rehazada, resuelta
    
    resolve("Esta promesa se resolvio.");
    reject("Esta promesa no se resolvio.");
})
promise.then(function(respuesta){console.log(respuesta);}); 
promise.catch(); */





/* let promesa = new Promise ( (resolve, reject) => {
    reject("S
    e resolvio")
})
console.log(promesa); */



/* console.log("Se van a imprimir los timeouts");
setTimeout(function(){console.log("Pasaron 2 segundos")}, 2000)
setTimeout(function(){console.log("Pasaron 3 segundos")}, 3000)
console.log("Se imprimieron."); */





/* console.log("Se va a ejecutar la promesa")

let promesa = new Promise ( (resolve, rejected) => {
    setTimeout(() => {
        resolve('Se resolvio la promesa');
    }, 3000);  
})

console.log(promesa)

console.log("Se acaba de terminar de ejecutar la promesa")

promesa.then( mensaje => console.log(mensaje) ); */




/* let promesa = new Promise ( (resolve, reject) => {
    
    let numero = 6;

    if (numero%2 == 0){
        resolve("Si es par.")
    }else{
        reject("Noe es par.")
    }


})

promesa
    .then( mensaje => console.log(mensaje) )
    .catch( mensaje => console.log(mensaje) ); */


/* let promesaSWAPI = new Promise ( (resolve, reject) => {
    request.get("https://swapi.co/api/people/13/", (error, response, body) =>{
        
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject (error);

    })
});

promesaSWAPI
    .then(json => console.log(json))
    .catch(error => console.log(error)); */


    
let clima = new Promise ((resolve, reject) => {
        request.get("https://swapi.co/api/planets/1/", (error, response, body) => {
            let respuesta = JSON.parse(body);    
            
            response.statusCode == 200
            ? resolve(`Planeta: ${respuesta.name}, Clima: ${respuesta.climate}.`)
            : reject(response.statusCode);
        })
    });

clima 
    .then(str => console.log(str))
    .catch(error => console.log(error));


