const mongoose = require('mongoose');

const PUBLICACION_STATUS = require('../data/PUBLICACION_STATUS')



const LenguaSchema = new mongoose.Schema({
  tipo:  {
    type: String,
    required: true
  },
  nombreOriginario: {
    type: String,
    required: true
  },
  nombreCastellanizado:  {
    type: String,
    required: true
  },
  otrosNombres: String,
  variantes: String,
  comunidades: String,
  alfabeto: String,
  latitud: Number,
  longitud: Number,
  familia: String,
  categoriasLinguisticas: String,
  riesgoDesaparicion: Number,
  cantidadHablantes: String,
  distribucionDemografica: String,
  audios: String,
  fotografias: String,
  textiles: String,
  twitterCuentas: String,
  twitterHashtags: String,
  tweets: String,
  normaDeEscritura: String
});
  
module.exports = mongoose.model('Lengua', LenguaSchema);

     tweets    