var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var film = require('../films/film.model.js');

var schema = mongoose.Schema;

var genere = new schema({
    id:Number,
    name: String

});

genere.post('remove', function (genere) {
    film.update({}, {
        $pull: { genre_ids: genere.id }
    }).exec();
});

var Genere = mongoose.model('Genere', genere);
module.exports = Genere;