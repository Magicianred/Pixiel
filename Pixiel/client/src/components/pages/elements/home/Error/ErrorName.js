import React from 'react';

//Material UI
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    message : {
        fontFamily: "Dogica Pixel",
        fontSize: 15,
        [theme.breakpoints.only('xs')]: {
            "& .MuiAlert-message": {
                fontSize: 11,
                paddingTop: 11,
                paddingBottom: 11,
            }
        },
    }
}));


const ErrorForm = ({ errorName, setErrorName}) => {

    const classes = useStyles();

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setErrorName(false);
    };

    return (
        <>
            {
                errorName && (
                    <div className={classes.root}>
                        <Snackbar open={errorName} autoHideDuration={6000} onClose={handleClose}>
                            <Alert
                                onClose={handleClose}
                                severity="error"
                                className={classes.message}
                            >
                                Il nome scelto è già in uso!
                            </Alert>
                        </Snackbar>
                    </div>
                )
            }
        </>
    );
};

export default ErrorForm;