var express = require('express');
var generiController = require('./genere.controller.js');

var generi = express.Router();

// tutti i film
generi.get('/', generiController.getAll);

module.exports = generi;