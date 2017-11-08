var express = require('express');
var filmController = require('./film.controller.js');

var films = express.Router();
// prendo titolo dalla query
//films.get('', filmController.getByQuery);
// tutti i film
films.get('/', filmController.getAll);
// prendo da id film
films.get('/:id', filmController.getOne);
// inserisco nuovo film
films.post('/nuovoFilm', filmController.setOne);
// aggiono film 
films.put('/aggiornaFilm/:id', filmController.updateOne);
// nuovo voto film 
films.put('/nuovoVoto/:id', filmController.setVote);
// elimino un film con l'id
films.delete('/:id', filmController.deleteOne);

// films.get('/', (req, res) => {
//     res.send('lista dei films');
// })

// films.get('/:id', (req, res) => {
//     res.send('film con id:' + req.params.id);
// })

module.exports = films;