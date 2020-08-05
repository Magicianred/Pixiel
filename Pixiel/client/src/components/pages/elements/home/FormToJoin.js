import React from "react";

//Material-UI
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";

//Componenti creati da me
import ClearButtonRoom from "./ClearButtonRoom";
import ClearButtonNickName from "./ClearButtonNickName";


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


const FormToJoin = ({ nickName, setNickName, room, setRoom }) => {

        const classes = useStyles();

        return (
            <>
                {/*Form per il Nickname*/}
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
                            endAdornment: <InputAdornment position="end">
                                <ClearButtonNickName
                                    nickName={nickName}
                                    setNickName={setNickName}
                                />
                            </InputAdornment>,
                            className: classes.input,
                        }}
                        id="Nickname"
                        label="Nickname"
                        type="text"
                        value={nickName}
                        color="secondary"
                        onChange={(event) => setNickName(event.target.value)}
                        autoFocus={false}
                    />
                    </form>


                {/*Form per il nome della Stanza*/}
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
                            endAdornment: <InputAdornment position="end">
                                <ClearButtonRoom
                                    room={room}
                                    setRoom={setRoom}
                                />
                            </InputAdornment>,
                            className: classes.input,
                        }}
                        id="Room"
                        label="Stanza"
                        type="text"
                        value={room}
                        color="secondary"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </form>
            </>
        )
    }


export default FormToJoin;