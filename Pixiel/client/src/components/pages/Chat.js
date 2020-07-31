import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

//Material-UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";

//Componenti creati da me
import TextChat from "./elements/chat/TextChat";
import InputChat from "./elements/chat/InputChat";
import InfoBar from "./elements/chat/InfoBar";
import {makeStyles} from "@material-ui/core/styles";
import {deepPurple} from "@material-ui/core/colors";



const useStyles = makeStyles((theme) => ({
    outerContainer: {
        backgroundColor: theme.palette.primary.main,
    },
    container: {
        backgroundColor: deepPurple[100],
    }
}));



let socket;

const Chat = ({ location }) => {

    const classes = useStyles();


    //Hooks
    const [nickName, setNickName] = useState('');
    const [room, setRoom] = useState('');
    //Per digitare i messagi
    const [message, setMessage] = useState('');
    //Per salvare tutti messaggi
    const [messages, setMessages] = useState([]);


    const ENDPOINT = 'localhost:3001';


    useEffect(() => {
        const { nickName, room } = queryString.parse(window.location.search);

        socket = io(ENDPOINT);
        setNickName(nickName);
        setRoom(room);

        //Permette di visualizzare i dati immessi come nickName e room
        socket.emit('join', { nickName, room }, () => {

        });

        //Parte di codice che riguarda la disconnessione di un utente
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    //Permette di inviare i messaggi dell'admin(da server) o qualunque messaggio dell'utente nell'array
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);


    console.log(message, messages);

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                className={classes.outerContainer}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    direction="column"
                    mt="125px"
                    mb="60px"
                    pb="60px"
                    height="100%"
                    width="75%"
                    className={classes.container}
                >
                    {/*Barra superiore con le informazioni sulla chat*/}
                    <InfoBar
                        room={room}
                    />


                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        {/*Chat con i messaggi*/}
                        <TextChat
                            messages={messages}
                            nickName={nickName}
                        />


                    {/*Parte della Chat per immettere il testo da inviare*/}
                    <InputChat
                        message={message}
                        setMessage={setMessage}
                        socket={socket}
                    />
                    </Grid>

                </Box>
            </Box>
        </>
    )
}

export default Chat;