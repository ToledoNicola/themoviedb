angular.module('app').controller('FilmCtrl', function ($scope, FilmSrvc) {


    FilmSrvc.getFilms()
        .then(function (results) {
            $scope.listaFilm = results.data;
        }).catch();

    $scope.vediDettaglio = function (id) {
        FilmSrvc.getFilm(id)
        .then(function (results) {
            $scope.Film = results.data;
            $scope.listaFilm =0;
            }).catch();
    };



})