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


const ClearButtonNickName = ({ nickName, setNickName }) => {

    const classes = useStyles();

    //Bottone per eliminare tutto ciò che è scritto nel form del Nickname
    function handelClick(e) {
        e.preventDefault();
        setNickName('');
    }

    return (
        <>
            {
                nickName.length !== 0 &&
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