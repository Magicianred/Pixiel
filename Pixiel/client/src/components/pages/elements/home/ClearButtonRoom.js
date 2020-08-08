import React from "react";

//Material-UI
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.secondary.main,
        padding: 0,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        position: 'relative',
        fontFamily: 'Dogica Pixel',
    }
}));


const ClearButtonNickName = ({ room, setRoom }) => {

    const classes = useStyles();

    //Bottone per eliminare tutto ciò che è scritto nel form del nome della Stanza
    function handelClick(e) {
        e.preventDefault();
        setRoom('');
    }

    return (
        <>
            {
                room.length !== 0 &&
                <IconButton
                    onClick={handelClick}
                    size="small"
                    className={classes.root}
                >
                    &times;
                </IconButton>
            }
        </>
    );
};

export default ClearButtonNickName;