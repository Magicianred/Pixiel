import React, { useState } from 'react';

//Material-UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

//Componenti creati da me
import Logo from "./elements/home/Logo";
import JoinButton from "./elements/home/JoinButton";
import FormToJoin from "./elements/home/FormToJoin";
import ErrorForm from "./elements/home/ErrorForm";
import TypedText from "./elements/home/TypedText";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.dark,
    },
    card: {
        background: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
    }
}));


function Home() {
    //Hooks
    const [nickName, setNickName] = useState('');
    const [room, setRoom] = useState('');
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    return (
        <>
            <Grid
                className={classes.root}
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >

                <Card className={classes.card}>

                    {/*Logo*/}
                    <Grid item xl={12}  align="center">
                        <Logo />
                    </Grid>


                    <CardContent>
                        {/*Testo che spiega la funzione del sito*/}
                        <TypedText />


                        {/*Form*/}
                        <Grid item xl={12}  align="center">
                            <FormToJoin
                                setNickName = {setNickName}
                                setRoom = {setRoom}/>
                        </Grid>


                        {/*Bottone per accedere*/}
                        <Grid item xl={12}  align="center">
                            <JoinButton
                                nickName = {nickName}
                                room = {room}
                                setOpen = {setOpen}
                            />
                        </Grid>
                    </CardContent>
                </Card>


                {/*Errore che compare quando uno dei due form non viene riempito e viene clickato il pultante "accedi"*/}
                <ErrorForm
                    open = {open}
                    setOpen = {setOpen}
                />


            </Grid>
        </>
    )
}

export default Home;