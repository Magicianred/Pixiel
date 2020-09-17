import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

//Material-UI
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

//Creati da me
import Message from "./Message";
import {Container} from "@material-ui/core";
import ChatInformation from "./ChatInformation";


const useStyles = makeStyles((theme) => ({
    root: {
        height: '49vh',
        backgroundColor: theme.palette.primary.light,
    },
    messages: {
        padding: 5% 0,
        overflowY: 'auto',
        flex: 'auto',
        height: '49vh',
        behavior: 'smooth',
    }
}));



const TextChat = ({ messages, nickName }) => {

    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <ChatInformation />
                <ScrollToBottom
                    className={classes.messages}
                    mode="bottom"
                >
                    {messages.map((message, i) =>
                        <div key={i}>
                            <Message
                                message={message}
                                nickName={nickName}
                            />
                        </div>
                    )}
                </ScrollToBottom>
            </Container>
        </>
    )
}

export default TextChat;