import React from 'react';

//Material-UI
import {withStyles} from "@material-ui/core/styles";
import {deepPurple} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

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
    [theme.breakpoints.down('sm')]: {
        sizeSmall: {
            height: 35,
            width: 15,

        },
        root: {
            fontSize: 15,
        }
    }
}))(Button);


const SendButton = ({ sendMessage }) => {
    return (
        <>
            {/*Se il bottone viene cliccato senza aggiungere i due valori, cioè nickName e room, non viene eseguito l'evento
            in caso contrario riporta alla pagina della chat, con il link che ha al suo interno i due dati immessi*/}
                <ColorButton
                    onClick={(event) => sendMessage(event)}
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    display="inline"
                >
                    Invia
                </ColorButton>
        </>
    )
}

export default SendButton;