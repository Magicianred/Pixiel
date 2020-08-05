import React from "react";

//Material-UI
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Monster Friend Fore",
        [theme.breakpoints.only('xs')]: {
            fontSize: 54,
        },
    }
}));


const Logo = () => {

    const classes = useStyles();

    return(
        <>
            <Box m={3}>
                <Typography className={classes.root} variant="h1">
                    Pixiel
                </Typography>
            </Box>
        </>
    )
}

export default Logo;