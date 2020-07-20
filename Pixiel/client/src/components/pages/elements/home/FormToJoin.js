import React from "react";

//Material-UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const FormToJoin = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }));

        const classesFormToJoin = useStyles();

        return (
            <>
                <form className={classesFormToJoin.root} noValidate autoComplete="off">
                    <TextField
                        id="standard-basic"
                        label="Nickname"/>
                </form>
            </>
        )
    }


export default FormToJoin;