
var mongoose = require('mongoose');
mongoose.connect('mongodb://nicola:toledo96@ds033285.mlab.com:33285/themoviedb',
    { useMongoClient: true },
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Connesso al db');
        }
    })