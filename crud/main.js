let request = require('request');
let URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com';

// CREATE AUTHOR
/* let crearAutor = new Promise ((resolve, reject) =>{
    let URI = '/api/v1/authors/';
    let URL = URL_BASE + URI;
    let jsonSend = {
            "name": "Pedro",
            "last_name": "Paramo",
            "nacionalidad": "MX",
            "biography": "Fue a comala porque le dijeron que ahí vivio su padre.",
            "gender": "M",
            "age": "67"
        };

    request.post({url: URL, formData: jsonSend}, (error, response, body) => {
        response.statusCode == 201
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error)
    })
})

crearAutor
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */



// READ AUTHOR
/* let leerAutor = new Promise ((resolve, reject)=>{
    let autor = 1060;
    let URI = `/api/v1/authors/${autor}/`;
    let URL = URL_BASE + URI;

    request.get(URL,(error, response, body)=>{
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error);
    })
})

leerAutor
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */



// UPDATE AUTHOR
/* let actualizarAutor = new Promise ((resolve, reject)=>{
    let autor = 1060;
    let URI = `/api/v1/authors/${autor}/`;
    let URL = URL_BASE + URI;
    let jsonSend = {
            "name": "José Emilio",
            "last_name": "Pacheco",
            "nacionalidad": "MX",
            "biography": "Escribio un libro de amor entre un niño y una maestra",
            "gender": "M",
            "age": "67"
        };

    request.put({url: URL, formData: jsonSend}, (error, response, body) => {
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error)
    })
})

actualizarAutor
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */



// PARTICIAL UPDATE
/* let parcialAutor = new Promise ((resolve, reject)=>{
    let autor = 1060;
    let URI = `/api/v1/authors/${autor}/`;
    let URL = URL_BASE + URI;
    let jsonSend = {
            "name": "Emilio",
        };

    request.patch({url: URL, formData: jsonSend}, (error, response, body) => {
        response.statusCode == 200
        ? resolve(JSON.parse(body))
        : reject(response.statusCode + error)
    })
})

parcialAutor
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */


// DELET AUTHOR
let borrarAutor = new Promise ((resolve, reject) =>{
    let autor = 1183;
    let URI = `/api/v1/authors/${autor}/`;
    let URL = URL_BASE + URI;

    request.delete(URL, (error, response, body)=>{
        response.statusCode == 204
        ? resolve('Autor borrado.')
        : reject(response.statusCode + error)
    })
})

borrarAutor
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));