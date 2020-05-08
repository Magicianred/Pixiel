var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Ciao a tutti!');
});
server.on('close', function() {
  // Siamo in ascolto dell'evento di chiusura
  console.log('Addio!');
});
// Avviamo il server
server.listen(8080);
// Stoppialo il server. Questo attiverà l'evento close
server.close();


/*
Quindi questo codice:
var server = http.createServer(function(req, res) { });


Può essere scritto anche in questa maniera più prolissa:
var server = http.createServer();
server.on('request', function(req, res) { });
*/



var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on('gameover', function(message){
  console.log(message);
});

game.emit('gameover', 'Hai perso!');




/*
- Tutte le applicazioni Node.js sono basate su un meccanismo di eventi, che determina quale funzione sarà successivamente chiamata.
- Con il metodo on(), è possibile riprodurre un evento e dire quale funzione deve essere richiamata al verificarsi dell’evento.
- Con il metodo emit() è possibile creare il proprio evento e quindi attivare le funzioni che ascoltano l’evento.
*/
