const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const { addUser, removeUser, getUser, getUsersInRoom } = require ("./users.js");

const PORT = process.env.PORT || 3001;

//Utilizziamo il file nella cartella routes
const  router = require("./routes/index");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//Connessione al server
io.on('connection', (socket) => {
    //Nickname e room utilizzate per la chat
    socket.on('join', ({nickName, room}, callback) => {
        const { error, user } = addUser({ id: socket.id, nickName, room });

        if(error) return callback(error);

        //Messaggio che appare all'utente appena entrato
        socket.emit('message', { user: 'admin', text: `${user.nickName}, benvenuto/a nella stanza ${user.room}`});
        //Alle persone nella stanza appare un messaggio che permettere di sapere chi è entrato in quel momento
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.nickName} è entrato nella stanza!`});
        socket.join(user.room);

        callback();
    });


    socket.on('sendMessage', ( message, callback ) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.nickName, text: message});

        callback();
    });


    //Disconnessione dal server
    socket.on('disconnect', () => {
        console.log('Un utente si è disconnesso');
    })
});



app.use(router);

server.listen(PORT, () => console.log(`Server in esecuzione nella porta ${PORT}`));


