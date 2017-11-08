var express = require('express');
var generiController = require('./genere.controller.js');

var generi = express.Router();

// tutti i film
generi.get('/', generiController.getAll);
// rimuovo una categoria
generi.delete('/:id', generiController.removeOne);

module.exports = generi;