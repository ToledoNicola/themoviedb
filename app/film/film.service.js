angular.module("app")
    .service("FilmSrvc", function ($http) {
        //USO GENERICO       
        var getFilms = function () {
             return $http({
                method: 'GET',
                url: '/api/films'
            });
        }


return {
    getFilms: getFilms
}
    });