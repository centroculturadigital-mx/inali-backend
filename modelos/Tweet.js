const mongoose = require('mongoose');


const TweetEsquema = new mongoose.Schema({
    id: Number, 
    twitter_id: String,
    content: String,
    tweet_date: Date,
    twitter_cuenta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TwitterCuenta"
    },
    twitter_hashtags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TwitterHashtag"
    }]
    //retweet_info:

});

module.exports = mongoose.model('Tweet', TweetEsquema);