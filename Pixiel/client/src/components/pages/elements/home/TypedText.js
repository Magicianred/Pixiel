import React from "react";
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 18,
        fontFamily: "Dogica Pixel",
        [theme.breakpoints.only('xs')]: {
            fontSize: 10,
        },
    }
}));


//Testo animato della pagina principale
const textLines = [
    `Benvenuto su Pixiel!`,
    `Qui puoi creare la tua stanza`,
    `e chattare con chi vuoi`,
    `Immetti il tuo Nickname`,
    `e il nome della Stanza`,
    `per chattare con i tuoi amici!`
];

const TypedText = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Typed strings={textLines} typeSpeed={100} />
            </div>
        </>
    )
}

export default TypedText;