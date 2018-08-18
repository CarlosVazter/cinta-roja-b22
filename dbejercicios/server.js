const express = require('express');
const bodyParser = require('body-parser');

const {Cerveza, Estilo, Cerveceria} = require('./client');

var app = express();

// Estas lineas se declaran para que siempre se parsee el body de las peticiones, porque express no lo hace en automático.
app.use(bodyParser.urlencoded({extended:true})); // 
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a ApiBeers')
})


// Creando una cerveceria
app.post('/api/v1/cerveceria/', (req, res) => {
    const {nombreCerveceria, pais} = req.body;
    let nuevaCerveceria = Cerveceria({
        nombreCerveceria,
        pais
    })
    nuevaCerveceria.save((req, cvria) => {
        res
            .status(201)
            .send(cvria);
    })
})


// Creando un estilo
app.post('/api/v1/estilo/', (req, res) => {
    const {nombreEstilo, descripcion} = req.body;
    let nuevoEstilo = Estilo ({
        nombreEstilo,
        descripcion
    })
    nuevoEstilo.save((req, est) => {
        res
        .status(201)
        .send(est);
    })
})


// Creando una cerveza
app.post('/api/v1/cerveza/', (req, res) => {
    const{nombreCerveza, estilo, cerveceria, contenido,} = req.body;

    let nuevaCerveza = Cerveza({
        nombreCerveza,
        estilo,
        cerveceria,
        contenido
    })
    nuevaCerveza.save((req, cvza) =>{
        res
            .status(201)
            .send(cvza)
    })
})


// Obteniendo todas las cervecerias
app.get('/api/v1/cerveceria/', (req, res) => {
    Cerveceria.find({}, (err, cervecerias) => {
        res.send(cervecerias);
    })
})


// Obteniendo todos los estilos
app.get('/api/v1/estilo/', (req, res) => {
    Estilo.find({}, (err, estilos) => {
        res.send(estilos);
    })
})


// Obteniendo todas las cervezas
app.get('/api/v1/cerveza/', (req, res) => {
    Cerveza.find({}, (err, cervezas) => {
        // res.send(cervezas);
        Estilo.populate(cervezas, {path:'estilo'}, (err, result) => {
            res.send(result);
        })
    })
})

app.listen(3000, () => 
    console.log('Servidor corriendo en el puerto 3000.'));

