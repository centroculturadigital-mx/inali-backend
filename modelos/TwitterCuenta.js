const mongoose = require('mongoose');


const TwitterCuentaEsquema = new mongoose.Schema({
  twitter_id: String,
  tweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tweet"
  }]
});

module.exports = mongoose.model('TwitterCuenta', TwitterCuentaEsquema);