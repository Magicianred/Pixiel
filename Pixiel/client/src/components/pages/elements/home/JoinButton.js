import React from "react";
import { Link } from 'react-router-dom';

//Material-UI
import {withStyles} from "@material-ui/core/styles";
import {deepPurple} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


//Colore e style del bottone per l'accesso
const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(deepPurple[500]),
        fontSize: 20,
        backgroundColor: deepPurple[500],
        '&:hover': {
            backgroundColor: deepPurple[300],
        },
        margin: theme.spacing(6, 0, 2),
    },
}))(Button);


const JoinButton = ({ nickName, room, setOpen }) => {

    //Animazione in caso di errore se l'utente non ha compilato il campo del nickname o della stanza
    const handleClick = (e) => {
        if (!nickName || !room) {
            e.preventDefault();
            setOpen(true);
        } else {
            return null
        }
    };


    return (
        <>
            <Grid
                alignItems="center"
                  justify="center"
            >
            {/*Se il bottone viene cliccato senza aggiungere i due valori, cioè nickName e room, non viene eseguito l'evento
            in caso contrario riporta alla pagina della chat, con il link che ha al suo interno i due dati immessi*/}
            <Link style={{ textDecoration: 'none' }} onClick={handleClick} to={`/chat?nickName=${nickName}&room=${room}`}>
                <ColorButton
                    variant="contained"
                    size="large"
                    type="submit"
                >
                    Accedi
                </ColorButton>
            </Link>
            </Grid>
        </>
    )
}

export default JoinButton;