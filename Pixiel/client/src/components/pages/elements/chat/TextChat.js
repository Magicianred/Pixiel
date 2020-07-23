import React from 'react';

//Material-UI
import TextField from "@material-ui/core/TextField";

const TextChat = ({ message, setMessage, socket }) => {

    //Funzione per mandare i messaggi
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <>
            <TextField
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
            />
            </>
    )
}

export default TextChat;