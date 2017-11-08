var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// var genere = require('./genere.model.js');


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
}, { toJSON: { virtuals: true } });
film.virtual('genere', {
    ref: 'Genere', // The model to use
    localField: 'genre_ids', // Find people where `localField`
    foreignField: 'id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false
})

var Film = mongoose.model('Film', film);
module.exports = Film;