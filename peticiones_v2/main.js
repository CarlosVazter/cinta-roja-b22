const request = require ('request');


// EJERCICIO 1
/* request.get('http://pokeapi.co/api/v2/pokemon/6/',function(error, response, body){
    respuesta = JSON.parse(body);    
    console.log(respuesta.types);
}) */



// EJERCICIO 2: Creo que me fui por el camino más largo.
/* let resultado = [];
let filtro = [];

let getAuthor = (book) => {
    let url = 'http://openlibrary.org/search.json?q='
    let peticion = url+book;
    let listado = [];
   
    request.get(peticion, function(error, response, body){
        let respuesta = JSON.parse(body)
        
        for (var i = 0; i<respuesta.docs.length; i++){
            
            if (respuesta.docs[i].author_name != undefined){
                
                listado = respuesta.docs[i].author_name[0];
                
                resultado.push(listado);
            }
        }
        filtro = resultado.reduce((contadorNombre, nombre) => {
            contadorNombre[nombre] = (contadorNombre[nombre] || 0 ) +1 ;
            return contadorNombre
        }, [])

        console.log(filtro);
    })
} */

//  getAuthor('Quidditch through the ages')

// EJERICICIO 2: resolución en clase
let URL_BASE = 'http://openlibrary.org/search.json?q=';

let buscarAutoresPorLibro = (libro) => {
    let URL = URL_BASE + libro;

    request.get(URL, (error, response, body)=>{
        if (response.statusCode == 200)
        {
            let libros = JSON.parse(body).docs;
            
            let autores = libros.map( libro => {return libro.author_name}); // Arrow fn simplificada.
            

        }
        else 
        {

        }
    })
}
// buscarAutoresPorLibro('Yo')



// EJERCICIO 3: Haciendo menos código con map.
let libros = [];

let getBooks = (author) => {
    let url = 'http://openlibrary.org/search.json?author='
    let peticion = url+author;

    request.get(peticion, function(error, response, body){
        let respuesta = JSON.parse(body)
        
        let res = respuesta.docs;

        libros = res.map(name => {
            return name.title_suggest;
        })
        console.log(libros);
    })
}

// getBooks('Jose Emilio Pacheco');


// EJERCICIO 6

/* let getPokemon = (numberOfPokemons) => {
    let url = 'http://pokeapi.co/api/v2/pokemon?limit='
    let peticion = url+numberOfPokemons;

    request.get(peticion, (error, response, body) => {
        
        if (response.statusCode == 200)
        {
          let arregloPokemones = JSON.parse(body).results;  
            
          arregloPokemones.map( pokemon => {
                request.get(pokemon.url, (error, repsonse, body) => {
                    let miPokemon = JSON.parse(body)
                    console.log(miPokemon);
                })
          })
        }
        else 
        {
            console.log(response.statusCode)
        }
    })

    return objeto

}

getPokemon('3'); */

// EJERCICIO 4
URL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-08-01&end_date=2018-08-08&api_key=BKa8wjwoJhBY1ZlKUFa2EBjkdHWk6uzINYLMab04'