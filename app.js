var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
//Serve per linkare di directory css, il primo determina il route, il secondo la cartella utilizzata
//Infatti se scriverò l'url cosi: http://127.0.0.1:3000/cose/index.css mi apparirà tutto ciò che ho scritto nel file index.css
//Dunque ci permetterà di utilizzare direttamente il file e di evitare lo <style></style>
//RICORDA! in questo caso devono essere uguali, che sennò non viene applicato il css alle pagine
app.use('/css', express.static('css'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
    //Utilizzato quando nell'url viene specificato un certo parametro
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res) {
    var data = {age: 25, job: 'ballerina', hobbies: ['mangiare', 'cantare', 'divertirsi']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);