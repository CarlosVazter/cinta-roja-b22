const express = require('express');
const bodyParser = require('body-parser');

const {
    Alumno,
    Programa
} = require('./client');

var app = express();

app.use(bodyParser.urlencoded({extended:true})); // con urlencoded ocupamos UTF-8
app.use(bodyParser.json());

// De aquí para arriba son las configuraciones que debemos incluir para comenar a utilizar 


app.get('/', (req, res) => {
    res.send('Hola mundo!')
})


// Creando un programa
app.post('/api/v1/programa', (req, res)=>{
    const{descripcion, duracion} = req.body; //desestructuracion de un objeto ECMS6
    let nuevoPrograma = Programa({
        descripcion,
        duracion
    })
    // Guardando en la base de datos.
    nuevoPrograma.save((req, pr)=> {
        res.status(201).send(pr);
    })
})


// Creando un alumno
app.post('/api/v1/alumno', (req, res) => {
    const{nombre, apellido, edad, programa}=req.body;
    let nuevoAlumno = Alumno({
        nombre,
        apellido,
        edad,
        programa
    })
    console.log(nuevoAlumno)
    nuevoAlumno.save((err, alumno) => {
        res
            .status(201)
            .send(alumno);
    })
})


// Obteniendo todos los alumnos
app.get('/api/v1/alumno', (req, res)=>{
    Alumno.find({},(err, alumnos)=>{
        // res.send(alumnos);
        Programa.populate(alumnos, {path:'programa'}, (err, result)=>{
            res.send(result);
        })
    })
});


// Obtener un alumno
app.get('/api/v1/alumno/:uid', (req, res)=>{
    let {uid} = req.params;
    // findById es exclusivo de mongoose y se le pasa un id.
    Alumno.findById(uid).exec()
        .then(alumno => Programa.populate(alumno, {path: 'programa'}, (err, result)=>{
            res.status(200).send(result);
        }))
        .catch(err => res.send(err));
})


// Borrar alumno
app.delete('/api/v1/alumno/:uid', (req, res)=>{
    let {uid} = req.params;
    Alumno.findByIdAndRemove(uid).exec()
        .then(alumno => res.status(204).send(alumno))
        .catch(err=>res.send(err))
});


// Actualizar un alumno
app.put('/api/v1/alumno/:uid', (req, res) => {
    let {uid} = req.params;
    Alumno.findByIdAndUpdate(uid, {$set:req.body}, {new:true}).exec()
        .then(alumno => res.send(alumno))
        .catch(err => res.send(err));
})

app.listen(8000, ()=> console.log('Server on port 8000'));