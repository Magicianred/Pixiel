import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {deepPurple} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const JoinButton = () => {
    //Colore e style del bottone per l'accesso
    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(deepPurple[500]),
            fontSize: 20,
            backgroundColor: deepPurple[500],
            '&:hover': {
                backgroundColor: deepPurple[300],
            },
        },
    }))(Button);

    return (
        <>
            <ColorButton
                variant="contained"
                color="primary"
                size="large">
                Accedi
            </ColorButton>
        </>
    )
}

export default JoinButton;