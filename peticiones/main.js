// Quien recibe código debe de ocupar la palabra reservada requiere.
// Por convención se utiliza el nombre de la variable identico al archivo que se esta importando.

/* let modulo = require("./modulo.js");

console.log(modulo);

let resultado = modulo.restar(5,3);
console.log(resultado); */

const request = require('request');

/* request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */

// API = Application Programming Interface
/* request.get('https://swapi.co/api/people/10/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); */

/* request.get('https://swapi.co/api/people/4/', function (error, response, body) {
       if (response.statusCode == 200) {
           let respuesta = JSON.parse(body)
           console.log(respuesta.films[0]);

            request.get(respuesta.films[0], function (error, response, body){
                let respuesta = JSON.parse(body)
                console.log(respuesta)
            })

       }else{
           console.log(response.statusCode, error);
       }
}); */


request.get('http://pokeapi.co/api/v2/pokemon/1/', function (error, response, body){
        let respuesta = JSON.parse(body);
        console.log(respuesta)
})