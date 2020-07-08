var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('la richiesta è stata fatta da: ' + req.url);
    if(req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/robe'){
        var robe = [{name: 'carmelo', age: 30}, {name: 'giuseppina', age: 80}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(robe));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
//Si utilizza questo ip perché è un server locale!
console.log('hello, che bella giornata');