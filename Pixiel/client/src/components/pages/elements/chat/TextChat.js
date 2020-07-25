import React from 'react';

//Material-UI
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import {deepPurple} from "@material-ui/core/colors";
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

//Componenti creati da me
import SendButton from "./SendButton";



const useStyles = makeStyles((theme) => ({
    root: {
        color: deepPurple[500],
    },
    text: {
        spacing: theme.spacing(200),
    }
}));


const TextChat = ({ message, setMessage, socket }) => {

    const classes = useStyles();

    //Funzione per mandare i messaggi
    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <>
            <Container fixed>
            <Box alignItems="flex-end" display="flex">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    className={classes.text}
                    type="text"
                    placeholder="Scrivi un messaggio..."
                    label="Standard"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
                />

                {/*Bottone per mandare i messaggi*/}
                <SendButton
                sendMessage={sendMessage}
                />

            </form>
            </Box>
            </Container>
        </>
    )
}

export default TextChat;