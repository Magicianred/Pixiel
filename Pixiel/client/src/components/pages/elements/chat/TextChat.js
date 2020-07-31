import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

//Material-UI
import {makeStyles} from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

//Creati da me
import Message from "./Message";

const useStyles = makeStyles((theme) => ({
    root: {
    },
}));


const TextChat = ({ messages, nickName }) => {

    const classes = useStyles();

    return (
        <>
            <Box
                pt="5%"
                pr={0}
                overflow="auto"
            >
            <ScrollToBottom>
                {messages.map((message, i) =>
                    <div key={i}>
                        <Message
                            message={message}
                            nickName={nickName}
                        />
                    </div>
                )}
            </ScrollToBottom>
            </Box>
        </>
    )
}

export default TextChat;