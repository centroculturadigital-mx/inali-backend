const mongoose = require('mongoose');

const Lengua = require('./Lengua')

const FamiliaEsquema = new mongoose.Schema({
    agrupaciones: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agrupacion'
      }
    ]
}); 
  
module.exports = Lengua.discriminator('Familia', FamiliaEsquema);