module.exports = (function () {
    var genere = require('./genere.model.js');

    var getAll = function (req, res) {
        genere.find()
            .exec()
            .then(function (generi) {
                res.status(200).json(generi);
            }).catch(function (err) {
                res.status(500).send(err);
            })
    }
    return {
        getAll: getAll
    }
})();