const express = require('express');
const bodyParser = require('body-parser');

const {Articulo, Ticket} = require ('./client');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Raíz
app.get('/', (req, res) => {
    res.send('Bienvenido a la Api del supermercado La Chona');
});


// ------------- CRUD ARTICULOS ----------- //

// Create.
app.post('/api/v1/articulo', (req, res) => {
    const{nombre, precio, existencia, descripcion} = req.body;

    let nuevoArticulo = Articulo({
        nombre,
        precio,
        existencia,
        descripcion
    })
    nuevoArticulo.save((error, art) => {
        // Validando cuando un campo requerido esta vacion y por lo tanto regresa un error.
        if(error == null){
            res.status(201).send(art);
        }else{
            res.status(422).send(error)
        }
    })
})


// Read (all).
app.get('/api/v1/articulos', (req, res) => {
    Articulo.find({}, (err, articulos) => {
        res.send(articulos);
    })
});


// Read (one).
app.get('/api/v1/articulos/:id', (req, res)=>{
    let{id}= req.params;
    Articulo
    .findById(id)
    .exec()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error));
})

// Update
app.put('/api/v1/articulos/:id', (req, res)=> {
    let{id}= req.params;
    Articulo
    // con el operador $set podemos cachar lo que sea que nos pasen y se actualice.
    .findByIdAndUpdate(
        id,
        {$set: req.body},
        {new: true}
    )
    // exec ejecuta el código anterior y lo encapsula en una promesa.
    .exec()
    .then(articulo => res.status(202).send(articulo))
    .catch(error => res.status(404).send(error));
})

// Delete
app.delete('/api/v1/articulos/:id', (req, res)=>{
    let{id}= req.params;
    Articulo
    .findByIdAndRemove(id)
    .exec()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error));
})

// ------------- CRUD ARTICULOS ----------- //


// ------------- CRUD TICKETS ----------- //
// Create
app.post('/api/v1/tickets', (req, res)=>{
    let {rfc, articulo, subtotal, iva, total} = req.body;

    let nuevoTicket = Ticket ({
        rfc,
        articulo,
       /*  subtotal,
        iva, 
        total */
    })
    nuevoTicket.save((error, ticketNuevo) => {
        error == null
        ? res.status(201).send(ticketNuevo)
        : res.send(error);
    })
})

// Read
app.get('/api/v1/ticket/:id', (req, res)=>{
    let{id}= req.params;
    Ticket
    .findById(id)
    .populate('articulo')
    .exec()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error));
})

// ------------- CRUD TICKETS ----------- //

// Listener
app.listen(8000, ()=> console.log('Server on port 8000'));