import React from "react";

//Material-UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';


//Colore e style dei form per l'accesso
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    input: {
        color: theme.palette.secondary.light,
        //Normal Style
        '&::before': {
            borderBottom: `1px solid ${theme.palette.secondary.light}`
        },
        //Focus Style
        '&::after': {
            borderBottom: `2px solid ${theme.palette.secondary.main}`
        },
        //Hover Style
        "&:hover:not(.Mui-disabled):before": {
            borderBottom: `2px solid ${theme.palette.secondary.light}`,
        }
    }
}));


const FormToJoin = ({ setNickName, setRoom }) => {

        const classes = useStyles();

        return (
            <>
                <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        InputLabelProps={{
                            className: classes.input,
                        }}
                        InputProps={{
                            className: classes.input,
                        }}
                        id="Nickname"
                        label="Nickname"
                        type="text"
                        color="secondary"
                        onChange={(event) => setNickName(event.target.value)}
                    />

                    <TextField
                        InputLabelProps={{
                            className: classes.input,
                        }}
                        InputProps={{
                            className: classes.input,
                        }}
                        id="Room"
                        label="Stanza"
                        type="text"
                        color="secondary"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </form>
            </>
        )
    }


export default FormToJoin;