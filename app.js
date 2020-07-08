var express = require('express');
var app = express();


app.get('/', function (req, res) {
res.send('Questa è l\'homepage');
});

app.get('/contact', function (req, res) {
    res.send('Questa è la pagina contatti');
});

app.get('/profile/:name', function(req, res) {
res.send('Questo è il profilo di ' + req.params.name);
});

app.listen(3000);