const mongoose = require('mongoose');

const PUBLICACION_STATUS = require('../data/PUBLICACION_STATUS')



const LenguaEsquema = new mongoose.Schema({
  nombreOriginario: {
    type: String,
    required: true
  },
  nombreCastellanizado:  {
    type: String,
    required: true
  },
  otrosNombres: String,
  comunidades: String,
  alfabeto: String,
  latitud: Number,
  longitud: Number,
  categoriasLinguisticas: String, // TODO: hablar con Yotz sobre esto
  riesgoDesaparicion: Number,
  cantidadHablantes: String,
  distribucionDemografica: String,
  // audios: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Audio'
  //   }
  // ],
  // fotografias:[
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Fotografia'
  //   }
  // ],
  // textiles: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Textil'
  //   }
  // ],
  // twitterCuentas: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'TwitterCuenta'
  //   }
  // ],
  // twitterHashtags: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'TwitterHashtag'
  //   }
  // ],
  // tweets: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Tweet'
  //   }
  // ],
  normaDeEscritura: String
});
  
module.exports = mongoose.model('Lengua', LenguaEsquema);

     tweets    