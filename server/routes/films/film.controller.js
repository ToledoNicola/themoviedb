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

    var getOne = function (req, res) {
        film.findById(req.params.id)
            .exec()
            .then(function (film) {
                res.status(200).json(film);
            }).catch(function (err) {
                res.status(500).send(err);
            })
    }
    var getByQuery = function (req, res) {
        film.find({ title: req.query.titolo })
            .exec()
            .then(function (film) {
                res.status(200).json(film);
            }).catch(function (err) {
                res.status(500).send(err);
            })
    }
    var setOne = function (req, res) {
        console.log(req.body);
        var filmnuovo = new film(req.body);
        filmnuovo.save()
            .then(function (nuovo) {
                console.log('Film salvato nel db');
                res.json(nuovo);
            })
            .catch(function (err) {
                res.send(err);
            });
    }
    return {
        getAll: getAll,
        getOne: getOne,
        getByQuery: getByQuery,
        setOne: setOne
    }
})();