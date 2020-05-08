var sayHello = function() {
  console.log('Ciao!');
}

var sayGoodbye = function() {
  console.log('Addio!');
}

exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;


/*
Stiamo esportando le funzioni in modo che siano utilizzabili al di fuori del nostro modulo: export.sayHello = sayHello;.
Da notare che avremmo potuto fare anche cosi:
exports.sayHello = function() { ... };

Tutte le funzioni non esportate nel file del modulo rimarranno private.
Non sarà possibile chiamarle all’esterno, tuttavia, potranno essere utilizzate da altre funzioni all’interno del modulo.
*/



/*
Ora, nel file principale della tua app (es: app.js), puoi richiamare queste funzioni, prima però devi importare il modulo!
var mymodule = require('./mymodule');
mymodule.sayHello();
mymodule.sayGoodbye();

require() restituisce un oggetto che contiene le funzioni esportate nel modulo.
Memorizziamo questo oggetto in una variabile con lo stesso nome del modulo (ma avremmo potuto dargli un qualsiasi altro nome).
*/
