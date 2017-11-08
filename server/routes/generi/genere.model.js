var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = mongoose.Schema;

var genere = new schema({
    id:Number,
    name: String

});
var Genere = mongoose.model('Genere', genere);
module.exports = Genere;