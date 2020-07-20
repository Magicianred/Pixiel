import React, { useState } from 'react';
import PropTypes from "prop-types";

//Material-UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

//Componenti creati da me
import Logo from "./elements/home/Logo";
import JoinButton from "./elements/home/JoinButton";
import FormToJoin from "./elements/home/FormToJoin";


function Home( props ) {
    const { classes } = props;

    //Hooks
    const [nickName, setNickName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <>
            <Container className={classes} fixed>
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


                </Grid>
            </Container>
        </>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Home;