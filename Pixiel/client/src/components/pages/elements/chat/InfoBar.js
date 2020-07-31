import React from 'react';

//Material UI
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {deepPurple} from "@material-ui/core/colors";

//Colore e style della App Bar
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontFamily: "Nishuki Pixels",
        flexGrow: 1,
    },
    colorDefault: {
        backgroundColor: deepPurple[500],
    },
}));

const InfoBar = ({ room }) => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar className={classes.colorDefault} color="default">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Stanza {room}
                        </Typography>
                        <a href="/"><img src="./images/closeIcon.png" alt="Esci dalla stanza" /></a>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default InfoBar;