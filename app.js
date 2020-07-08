var http = require('http');

var server = http.createServer(function(req, res){
    console.log('la richiesta è stata fatta da: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey clochard!');
});

server.listen(3000, '127.0.0.1');
//Si utilizza questo ip perché è un server locale!
console.log('hello, che bella giornata');