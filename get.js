/*
I parametri GET vengono aggiunti alla fine dell’URL, es:
http://localhost:8080/page?firstname=Alberto&lastname=Olla

Per recuperare questa stringa, è sufficiente utilizzare:
url.parse(req.url).query

Il problema è che l’intera stringa verrà restituita senza prima dividere i diversi parametri.
A questo punto devi includerlo nel tuo codice:
var querystring = require('querystring');

poi potrai fare:
var params = querystring.parse(url.parse(req.url).query);

A questo punto avremo una lista di parametri “params”. Per recuperare il valore del primo (il nome) basta scrivere: params[‘firstname’].
*/

var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
  var params = querystring.parse(url.parse(req.url).query);
  res.writeHead(200, {"Content-Type": "text/plain"});
  if ('firstname' in params && 'lastname' in params) {
    res.write('Il tuo nome: ' + params['firstname'] + ' ' + params['lastname']);
  } else {
    res.write('Tu hai un nome giusto?');
  }
  res.end();
});

server.listen(8080);
