
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/themoviedb',
    { useMongoClient: true },
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Connesso al db');
        }
    })