const mongoose = require('mongoose');

const PUBLICACION_STATUS = require('../data/PUBLICACION_STATUS')



const UsuarioSchema = new mongoose.Schema({
    imagenPerfil: String,
    status: { type: String, enum: PUBLICACION_STATUS },
    nombreUsuario: String,
    fechaNacimiento: Date,
    genero: String,
    nombres: String,
    apellidos: String,
    contrasenna: String,
    email: String
});
  
module.exports = mongoose.model('Usuario', UsuarioSchema);