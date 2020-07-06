var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Sei nella Reception. Posso aiutarti?');
    } else if (page == '/basement') {
        res.write('Sei nella cantina dei vini. Le bottiglie sono mie!');
    }  else if (page == '/floor/1/bedroom') {
        res.write('Oh, non dovresti essere qui!');
    } else if (404, {"Content-Type" : "text/plain"}) {
        res.write('Non esisto!');
    }
    res.end();
});
server.listen(8080);