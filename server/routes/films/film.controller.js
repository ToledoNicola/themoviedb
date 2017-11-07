module.exports = (function () {
    var film = require('./film.model.js');

    var getAll = function (req, res) {
        film.find()
        .exec()
        .then(function (films) {
            res.status(200).json(films);
        }).catch(function (err) {
            res.status(500).send(err);
        })
    }
    return {
        getAll: getAll
    }
})();