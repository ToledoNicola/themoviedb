var express = require('express');
var filmController = require('./film.controller.js');

var films = express.Router();
films.get('', filmController.getByQuery);
films.get('/', filmController.getAll);
films.get('/:id', filmController.getOne);

// films.get('/', (req, res) => {
//     res.send('lista dei films');
// })

// films.get('/:id', (req, res) => {
//     res.send('film con id:' + req.params.id);
// })

module.exports = films;