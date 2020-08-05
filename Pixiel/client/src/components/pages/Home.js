import React, { useState } from 'react';

//Material-UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

//Componenti creati da me
import Logo from "./elements/home/Logo";
import JoinButton from "./elements/home/JoinButton";
import FormToJoin from "./elements/home/FormToJoin";
import ErrorForm from "./elements/home/ErrorForm";
import TypedText from "./elements/home/TypedText";
import {makeStyles} from "@material-ui/core/styles";
import StickyFooter from "../layout/StickyFooter";


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

                    </Box>
                </Grid>
                <StickyFooter />
            </Box>
        </>
    )
}

export default Home;