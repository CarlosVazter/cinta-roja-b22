let express = require('express');
const bodyParser = require('body-parser'); // Body parse se ocupa para poder parsear el body de la petición.
let app = express();

// con esas lineas invocamos body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 
app.get('/', function (req, res) {
  res.send('¡Hola mundo!');
});


// Obtener usuarios
app.get('/usuarios/', function (req, res) {
  res.send('Aquí te devolvería una lista de usuarios');
});


// Crear un usuario
app.post('/usuarios/', function (req, res) {
  // console.log(req.body)
  let nuevoUsuario = req.body;
  console.log(nuevoUsuario);
  
  res
    .status(201)
    .send(nuevoUsuario);
});


// Modificar un usario
// Al colocar dos puntos express interpreta que lo que mandamos es una variable.
app.put('/usuarios/:uid/', (request, response) =>{
  console.log(request.params);
  console.log(request.query);
  response.status(200).send("Usuario actualizado exitosamente.")
})


// Borrar usuario
app.delete('/usuarios/:id/', (req, res)=>{
  console.log(req.params);
  res.status(204).send(req.params)
})


app.listen(3000, () => {
  console.log('Api corriendo en puerto 3000!');
});

