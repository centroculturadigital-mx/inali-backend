const mongoose = require('mongoose')

const Lengua = require('./Lengua')

const lenguaTipos = require('../data/LENGUA_TIPOS')

const AgrupacionEsquema = new mongoose.Schema({
    variantesIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Variante'
      } 
    ],
    variantes_ids: String,
    familiaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Familia'
    },
    familia_id: Number
}); 

module.exports = Lengua.discriminator(lenguaTipos.AGRUPACION, AgrupacionEsquema);