import React from "react";

//Material-UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import {deepPurple} from "@material-ui/core/colors";

const FormToJoin = ({ setNickName, setRoom }) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(deepPurple[500]),
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            paper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
        },
    }));

        const classesFormToJoin = useStyles();

        return (
            <>
                <form className={classesFormToJoin.root, classesFormToJoin.paper} noValidate autoComplete="off">
                    <TextField
                        id="Nickname"
                        label="Nickname"
                        type="text"
                        onChange={(event) => setNickName(event.target.value)}
                    />

                    <TextField
                        id="Room"
                        label="Stanza"
                        type="text"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </form>
            </>
        )
    }


export default FormToJoin;