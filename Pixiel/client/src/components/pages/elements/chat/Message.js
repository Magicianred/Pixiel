import React from 'react';
import ReactEmoji from 'react-emoji';

//Material-UI
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Nishuki Pixels"
    },
    messageBox1: {
        borderStyle: 'dashed',
        borderWidth: '5px',
        borderColor: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.contrastText,
    },
    messageBox2: {
        borderStyle: 'dashed',
        borderWidth: '5px',
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
    },
    typography: {
            fontSize: 15,
    }
}));


const Message = ({ message: { user, text, time }, nickName }) => {

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
                        py={0}
                        px="5%"
                        mt={3}
                        className={classes.root}
                    >
                        <Box
                            display="inline-block"
                            className={classes.messageBox1}
                            maxWidth="80%"
                            py="5px"
                            px="20px"
                        >
                            <Box width="100%">
                                <Box textAlign="right"><Typography variant="body1" className={classes.typography}><strong>{trimmedNickName} {time}</strong></Typography></Box>
                                <Typography variant="body2" className={classes.typography}>{ReactEmoji.emojify(text)}</Typography>

                            </Box>
                        </Box>

                    </Box>
                </>
            )
            : (
                <>
                    {/*Messaggi inviato dall'admin*/}
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        mt={3}
                        className={classes.root}
                    >
                        <Box
                            display="inline-block"
                            className={classes.messageBox2}
                            maxWidth="80%"
                            py="5px"
                            px="20px"
                        >
                            <Box textAlign="left"><Typography variant="body1" className={classes.typography}><strong>{user} {time}</strong></Typography></Box>
                            <Box width="100%"><Typography variant="body2" className={classes.typography}>{ReactEmoji.emojify(text)}</Typography></Box>
                        </Box>
                    </Box>
                </>
            )
    )
}

export default Message;