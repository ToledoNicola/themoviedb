angular.module('app').controller('FilmCtrl', function ($scope, FilmSrvc) {

    
        FilmSrvc.getFilms()
            .then(function(results){
                $scope.listaFilm = results.data;
            }).catch();
    

})