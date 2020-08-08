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
        fontFamily: 'Dogica Pixel',
        position: 'relative',
    },
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
                <IconButton
                    onClick={handelClick}
                    size="small"
                    className= {classes.root}
                >
                    &times;
                </IconButton>
            }
        </>
    );
};

export default ClearButtonNickName;