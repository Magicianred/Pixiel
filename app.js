var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//Serve per linkare di directory css, il primo determina il route, il secondo la cartella utilizzata
//Infatti se scriverò l'url cosi: http://127.0.0.1:3000/cose/index.css mi apparirà tutto ciò che ho scritto nel file index.css
//Dunque ci permetterà di utilizzare direttamente il file e di evitare lo <style></style>
app.use('/cose', express.static('css'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res) {
    var data = {age: 25, job: 'ballerina', hobbies: ['mangiare', 'cantare', 'divertirsi']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);