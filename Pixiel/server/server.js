const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const PORT = process.env.PORT || 3001;

//Utilizziamo il file nella cartella routes
const  router = require("./routes/index");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//Connessione al server
io.on('connection', (socket) => {
    console.log('Si è connesso qualcuno');

    //Nickname e room utilizzate per la chat
    socket.on('join', ({nickName, room}, callback) => {
    console.log(nickName, room);

    })

    //Disconnessione dal server
    socket.on('disconnect', () => {
        console.log('Un utente si è disconnesso');
    })
});



app.use(router);

server.listen(PORT, () => console.log(`Server in esecuzione nella porta ${PORT}`));


