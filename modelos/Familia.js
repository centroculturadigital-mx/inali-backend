const mongoose = require('mongoose');

const Lengua = require('./Lengua')
const lenguaTipos = require('../data/LENGUA_TIPOS')

const FamiliaEsquema = new mongoose.Schema({
    agrupacionesIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agrupacion'
      }
    ],
    agrupaciones_ids: String
}); 
  
module.exports = Lengua.discriminator(lenguaTipos.FAMILIA, FamiliaEsquema);