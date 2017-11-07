var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = mongoose.Schema;

var film = new schema({
    vote_count: {
        type: Number,
        required: true,
        default: 0,
    },
    video: {
        type: Boolean,
        required: true,
        default: false
    },
    vote_average: {
        type: Number,
        required: true,
        default: 0,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    popularity: {
        type: Number,
        required: true,
        default: 0,
    },
    poster_path: {
        type: String,
    },
    original_title:{
        type:String,
        required:true,
    },
    relase_date:{
        type:Date,

    }
});
var Film = mongoose.model('Film', film);
module.exports = Film;