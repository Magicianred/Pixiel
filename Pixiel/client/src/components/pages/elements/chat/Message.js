import React from 'react';

//Material-UI
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import {deepPurple} from "@material-ui/core/colors";
import {cyan} from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Nishuki Pixels"
    },
    messageBox1: {
        backgroundColor: deepPurple[50],
        color: theme.palette.primary.main,
    },
    messageBox2: {
        backgroundColor: cyan[200],
        color: theme.palette.primary.main,
    }
}));


const Message = ({ message: { user, text }, nickName }) => {

    const classes = useStyles();

    let isSentByCurrentUser = false;
    const trimmedNickName = nickName.trim().toLowerCase();

    if(user === trimmedNickName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ? (
                <>
                    {/*Messaggio mandato da un utente corrente*/}
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        mt={3}
                        className={classes.root}
                    >
                        <Box display="flex" alignItems="center">
                            <p>{trimmedNickName}</p>
                        </Box>
                        <Box
                            display="block"
                            className={classes.messageBox1}
                            maxWidth="80%"
                            borderRadius="20px"
                            pt="5px"
                            pr="20px"
                        >
                            <p>{text}</p>
                        </Box>
                    </Box>
                </>
            )
            : (
                <>
                    {/*Messaggi inviato dall'admin*/}
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        mt={3}
                        className={classes.root}
                    >
                        <Box
                            display="block"
                            className={classes.messageBox2}
                            maxWidth="80%"
                            borderRadius="20px"
                            pt="5px"
                            pr="20px"
                        >
                            <p>{text}</p>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <p>{user}</p>
                        </Box>
                    </Box>
                </>
            )
    )
}

export default Message;