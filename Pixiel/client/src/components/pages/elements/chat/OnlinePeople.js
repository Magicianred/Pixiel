import React from "react";

//Material-UI
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.contrastText,
        fontFamily: "Dogica Pixel",
        fontSize: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: 7,
        },
    },
    onlinePeople: {
        padding: 20,
        [theme.breakpoints.down('sm')]: {
            padding: 10,
        },
    },
    icon: {
      paddingRight: 5,
        height: 14,
        [theme.breakpoints.down('sm')]: {
            height: 10,
        },
    },
    h1: {
        display: 'inline',
    }
}));


const OnlinePeople = ({ users }) => {

    const classes = useStyles();

    return (
        <>
            {
                users ? (
                    <>
                        <Grid direction="row" className={classes.root}>
                        <h1 className={classes.h1}>Persone online:</h1>
                            <h2 className={classes.h1}>
                                {users.map(({nickName}) => (
                                    <span key={nickName} className={classes.onlinePeople}>
                                        <img className={classes.icon} alt="persona online" src="./images/people.png" />
                                        {nickName}
                                    </span>
                                ))}
                            </h2>
                        </Grid>
                        </>
                )
                    : null
            }
            </>
    )
}

export default OnlinePeople;