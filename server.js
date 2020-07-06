//requisito minimo di ogni web app scritta in Node
var http = require('http');

//La variabile http rappresenta l’oggetto JavaScript che ci permetterà di lanciare il server web e possiamo farlo in questo modo:
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Ciao a tutti, sono un web server!');
});
//Tutte queste 4 righe corrispondono ad una singola chiamata del metodo createServer()!
// La funzione di callback che gli stiamo passando verrà richiamata nel momento in cui un visitatore si connetterà al sito.
server.listen(8080);
