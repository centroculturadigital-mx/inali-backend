const mongoose = require('mongoose');

const PUBLICACION_STATUS = require('../data/PUBLICACION_STATUS')



const UsuariaSchema = new mongoose.Schema({
    imagenPerfil: String,
    status: { type: String, enum: PUBLICACION_STATUS },
    nombreUsuaria: String,
    fechaNacimiento: Date,
    edad: Number,
    genero: String,
    nombres: String,
    apellidos: String,
    contrasenna: String,
    email: String,
    origen: String
}); 
  
module.exports = mongoose.model('Usuaria', UsuariaSchema);