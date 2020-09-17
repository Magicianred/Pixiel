import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 10,
        fontFamily: "Dogica Pixel",
        color: theme.palette.primary.contrastText,
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
        },
    },
}));


const ChatInformation = () => {

    const classes = useStyles();

    return (
        <>
            <h4 className={classes.root}>Questa applicazione supporta l'uso delle emoji! Prova a scrivere nella chat: ":)", ":cool:" or ":wink:".</h4>
            </>
    )
}

export default ChatInformation;