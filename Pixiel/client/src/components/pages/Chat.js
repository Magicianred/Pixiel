import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

//Material-UI
import {makeStyles} from "@material-ui/core/styles";
import {deepPurple} from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";

//Componenti creati da me
import TextChat from "./elements/chat/TextChat";
import InputChat from "./elements/chat/InputChat";
import InfoBar from "./elements/chat/InfoBar";
import OnlinePeople from "./elements/chat/OnlinePeople";
import StickyFooter from "../layout/StickyFooter";




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    mainContainer: {
    },
    leftContainer: {
        backgroundColor: theme.palette.primary.main,
        padding: '20px 0 10px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 0 10px',
        },
    },
    rightContainer: {
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
    //Utenti online
    const [users, setUsers] = useState('');

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
            setMessages(messages => [...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);


    console.log(message, messages);

    return (
        <>
            <Box className={classes.root}>

                {/*Barra superiore con le informazioni sulla chat*/}
                <InfoBar room={room} />

                <Box className={classes.mainContainer}>
                    <Box className={classes.leftContainer}>
                        {/*Permette di vedere chi è online in quel momento*/}
                        <OnlinePeople users={users} />
                    </Box>

                    <Box className={classes.rightContainer}>
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
                    </Box>
                </Box>


                {/*Footer*/}
                <StickyFooter />


            </Box>
        </>
    )
}

export default Chat;