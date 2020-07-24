import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

//Material-UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

//Componenti creati da me
import TextChat from "./elements/chat/TextChat";
import InfoBar from "./elements/chat/InfoBar";

let socket;

const Chat = ({ location }) => {
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
            {/*Barra superiore con le informazioni sulla chat*/}
            <InfoBar
                room={room}
            />


            <Container fixed>
               <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">


                    {/*Parte della Chat per immettere il testo da inviare*/}
                    <TextChat
                        message={message}
                        setMessage={setMessage}
                        socket={socket}
                    />

                </Grid>
            </Container>
        </>
    )
}

export default Chat;