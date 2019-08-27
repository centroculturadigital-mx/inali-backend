const mongoose = require('mongoose');


const TwitterHashtagEsquema = new mongoose.Schema({
  texto: String,
  tweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tweet"
  }]
});

module.exports = mongoose.model('TwitterHashtag', TwitterHashtagEsquema);