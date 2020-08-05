import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.secondary.main,
        padding: 0,
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        fontSize: 30,
        position: 'relative',
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
                <button
                    onClick={handelClick}
                    className={classes.root}
                >
                    &times;
                </button>
            }
        </>
    );
};

export default ClearButtonNickName;