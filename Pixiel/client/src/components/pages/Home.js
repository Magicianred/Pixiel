import React, { useState } from 'react';

//Material-UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";

//Componenti creati da me
import Logo from "./elements/home/Logo";
import JoinButton from "./elements/home/JoinButton";
import FormToJoin from "./elements/home/FormToJoin";
import ErrorForm from "./elements/home/Error/ErrorForm";
import TypedText from "./elements/home/TypedText";
import StickyFooter from "../layout/StickyFooter";
import ErrorName from "./elements/home/Error/ErrorName";


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.light,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    card: {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.only('xs')]: {
            maxWidth: 300,
        },
        [theme.breakpoints.only('lg')]: {
            maxHeight: 450,
            marginTop: -35,
        },
    }
}));


function Home() {
    //Hooks
    const [nickName, setNickName] = useState('');
    const [room, setRoom] = useState('');

    //Errori
    const [errorForm, setErrorForm] = useState(false);
    const [errorName, setErrorName] = useState(false);


    const classes = useStyles();

    return (
        <>
            <Box className={classes.root}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >

                    <Box my={8}>
                        <Card className={classes.card}
                        >

                            {/*Logo*/}
                            <Grid item align="center">
                                <Logo />
                            </Grid>


                            <CardContent>
                                <Box ml={3}>
                                    {/*Testo che spiega la funzione del sito*/}
                                    <TypedText />
                                </Box>


                                {/*Form*/}
                                <Grid item xl={12}  align="center">
                                    <FormToJoin
                                        nickName={nickName}
                                        setNickName = {setNickName}
                                        room={room}
                                        setRoom = {setRoom}/>
                                </Grid>


                                {/*Bottone per accedere*/}
                                <Grid item xl={12}  align="center">
                                    <JoinButton
                                        nickName = {nickName}
                                        room = {room}
                                        setErrorName = {setErrorName}
                                        setErrorForm = {setErrorForm}
                                    />
                                </Grid>
                            </CardContent>
                        </Card>


                        {/*Errore che compare quando uno dei due form non viene riempito e viene clickato il pultante "accedi"*/}
                        <ErrorForm
                            errorForm = {errorForm}
                            setErrorForm = {setErrorForm}
                        />


                        {/*Errore che compare se un utente digita lo stesso nome per entrare nella medesima stanza*/}
                        <ErrorName
                            errorName = {errorName}
                            setErrorName = {setErrorName}
                            />

                    </Box>
                </Grid>

                {/*Footer*/}
                <StickyFooter />
            </Box>
        </>
    )
}

export default Home;