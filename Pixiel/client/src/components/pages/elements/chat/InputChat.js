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
        flex: 1,
        color: deepPurple[500],
        backgroundColor: theme.palette.primary.light,
    },
    [theme.breakpoints.down('sm')]: {
        formSize: {
            width: "100%",
        },
    },
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
            <Container className={classes.root}>
                <Box
                    justify="center"
                    alignItems="flex-end"
                    justifyContent="center"
                    display="flex">
                    <Box
                        width="80%"
                        className={classes.formSize}
                    >
                            <TextField
                                fullWidth
                                style={{ margin: 8 }}
                                margin="normal"
                                type="text"
                                placeholder="Scrivi un messaggio..."
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }
                            />
                    </Box>

                    <Box  mt="25px">
                        {/*Bottone per mandare i messaggi*/}
                        <SendButton
                            sendMessage={sendMessage}
                        />
                    </Box>

                </Box>
            </Container>
        </>
    )
}

export default InputChat;