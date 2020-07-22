import React, { useState } from 'react';

//Material-UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

//Componenti creati da me
import Logo from "./elements/home/Logo";
import JoinButton from "./elements/home/JoinButton";
import FormToJoin from "./elements/home/FormToJoin";
import ErrorForm from "./elements/home/ErrorForm";


function Home() {
    //Hooks
    const [nickName, setNickName] = useState('');
    const [room, setRoom] = useState('');
    const [open, setOpen] = useState(false);


    return (
        <>
            <Container fixed>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    {/*Logo*/}
                    <Logo />

                    {/*Form*/}
                    <FormToJoin
                        setNickName = {setNickName}
                        setRoom = {setRoom}/>

                    {/*Bottone per accedere*/}
                    <JoinButton
                        nickName = {nickName}
                        room = {room}
                    />

                    {/*Errore che compare quando uno dei due form non viene riempito e viene clickato il pultante "accedi"*/}
                    <ErrorForm
                        open = {open}
                        setOpen = {setOpen}
                    />

                </Grid>
            </Container>
        </>
    )
}

export default Home;