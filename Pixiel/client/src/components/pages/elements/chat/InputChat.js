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


const InputChat = ({ message, setMessage, socket }) => {

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
            <Box
                justifyContent="center"
                 alignItems="flex-end"
                display="flex">
                <Box
                    width="80%"
                     p="5%">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        className={classes.text}
                        fullWidth
                        style={{ margin: 8 }}
                        margin="normal"
                        type="text"
                        placeholder="Scrivi un messaggio..."
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
                    />
                </form>
                </Box>

                {/*Bottone per mandare i messaggi*/}
                <SendButton
                    sendMessage={sendMessage}
                />


            </Box>
        </>
    )
}

export default InputChat;