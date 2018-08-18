const mongoose = require('mongoose');
let url = 'mongodb://brewmaster:Birra86@ds123562.mlab.com:23562/apibeers';

mongoose.connect(url);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cervezaSchema = new Schema ({
    cerveza:ObjectId,
    nombreCerveza:String,
    estilo:{type: Schema.ObjectId, ref:'Estilo'},
    cerveceria:{type: Schema.ObjectId, ref:'Cerveceria'},
    contenido:String
})

const estiloSchema = new Schema ({
    estilo:ObjectId,
    nombreEstilo:String,
    descripcion:String
});

const cerveceriaSchema = new Schema ({
    cerveceria:ObjectId,
    nombreCerveceria:String,
    pais:String
});




var Cerveza = mongoose.model('Cerveza', cervezaSchema);
var Estilo = mongoose.model('Estilo', estiloSchema);
var Cerveceria = mongoose.model('Cerveceria',cerveceriaSchema);


module.exports = {Cerveza, Estilo, Cerveceria};