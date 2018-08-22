const mongoose = require ('mongoose');
let url = 'mongodb://admin:qwerty12345@ds127362.mlab.com:27362/lachona';

mongoose.connect(url,{ useNewUrlParser: true }, () => {
    console.log('Conexión exitosa a la base de datos');
});

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


const articuloSchema = new Schema ({
    articulo:ObjectId,
    nombre:{type:String, required: true},
    precio:Number,
    existencia:Number,
    descripcion:String,
})

const ticketSchema = new Schema ({
    ticket:ObjectId,
    rfc:String,
    articulo: [{ type: ObjectId, ref: 'Articulo' }],
    subtotal:{type:Number, default: 0},
    iva:{type:Number, default: 0},
    total:{type:Number, default: 0},
})

var Articulo = mongoose.model('Articulo', articuloSchema);
var Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = {Articulo, Ticket};
