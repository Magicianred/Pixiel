import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    //Hooks
    const [nickName, setNickName] = useState('');
    const [room, setRoom] = useState('');


    const ENDPOINT = 'localhost:3001';


    useEffect(() => {
        const { nickName, room } = queryString.parse(window.location.search);

        socket = io(ENDPOINT);
        setNickName(nickName);
        setRoom(room);

        //Permette di visualizzare i dati immessi come nickName e room
        socket.emit('join', { nickName, room }, ({error}) => {

        });
        //Parte di codice che riguarda la disconnessione di un utente
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);


    return (
        <h1>Chat</h1>
    )
}

export default Chat;