angular.module("app")
    .service("FilmSrvc", function ($http) {
        //USO GENERICO       
        var getFilms = function () {
             return $http({
                method: 'GET',
                url: '/api/films'
            });
        }
        var getFilm = function (id) {
             return $http({
                method: 'GET',
                url: '/api/films/'+id
            });
        }


return {
    getFilms: getFilms,
    getFilm: getFilm
}
    });