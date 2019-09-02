const mongoose = require('mongoose');

const Lengua = require('./Lengua')
const lenguaTipos = require('../data/LENGUA_TIPOS')

const VarianteEsquema = new mongoose.Schema({
  agrupacionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agrupacion'
  },
  agrupacion_id: Number,
  familiaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Familia'
  },
  familia_id: Number
}); 
  
module.exports = Lengua.discriminator(lenguaTipos.VARIANTE, VarianteEsquema);