import React from 'react';

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {deepPurple} from "@material-ui/core/colors";

//Colore e style della App Bar
const useStyles = makeStyles(() => ({
    title: {
        fontFamily: "Dogica Pixel Bold",
        flexGrow: 1,
    },
    root: {
        backgroundColor: deepPurple[500],
    },
}));

const InfoBar = ({ room }) => {

    const classes = useStyles();

    return (
        <>
                <AppBar position="static" className={classes.root} color="default">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Stanza {room}
                        </Typography>
                        <a href="/"><img src="./images/closeIcon.png" alt="Esci dalla stanza" /></a>
                    </Toolbar>
                </AppBar>
        </>
    )
}

export default InfoBar;