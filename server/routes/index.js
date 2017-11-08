module.exports = function (app, express) {

    var path = require('path');

    app.use(express.json());
    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));
    app.use('/css', express.static(path.join(__dirname, '..', '..', 'public', 'css')));
    app.use('/js', express.static(path.join(__dirname, '..', '..', 'public', 'js')));

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });

    app.use('/api/films', require('./films'));
    app.use('/api/tvs', require('./tvs'));
    app.use('/api/generi', require('./generi'));

    app.get('/*', (req, res) => {
        res.status(404).redirect("/");
    });


}