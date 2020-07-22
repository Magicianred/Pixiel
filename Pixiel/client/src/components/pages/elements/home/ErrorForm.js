import React from 'react';

//Material UI
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const ErrorForm = ({ open, setOpen }) => {

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }


    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));


    const classes = useStyles();

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Non hai compilato un campo!
                </Alert>
            </Snackbar>
            </div>
        </>
    )
}

export default ErrorForm;