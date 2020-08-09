import React from "react";
import clsx from "clsx";

//Material-UI
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';


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
        display: 'inline-block',
        padding: '0 20px 0 20px',
        [theme.breakpoints.down('sm')]: {
            padding: '0 15px 0 15px',

        },
    },
    icon: {
        paddingRight: 5,
        height: 14,
        [theme.breakpoints.down('sm')]: {
            height: 10,
            paddingRight: 2,
        },
    },
    h1: {
        display: 'inline',
        paddingRight: 5,
        paddingLeft: 10,
    },
    expand: {
        transform: 'rotate(90deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(270deg)',
    },
    iconButton: {
        fontFamily: "Dogica Pixel Bold",
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
    }
}));


const OnlinePeople = ({ users }) => {

    const classes = useStyles();

    //Tasto per far vedere le persone online
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            {
                users ? (
                        <>
                            <Grid direction="row" className={classes.root}>
                                <h1 className={classes.h1}>Persone online</h1>


                                {/*Icona che se cliccata, mostra chi è online*/}
                                <IconButton
                                    ml={6}
                                    className={clsx(classes.expand, classes.iconButton, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                   >
                                </IconButton>


                                {/*Nomi delle persone online*/}
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <h2 className={classes.h1}>
                                    {users.map(({nickName}) => (
                                        <span key={nickName} className={classes.onlinePeople}>
                                        <img className={classes.icon} alt="persona online" src="./images/people.png" />
                                            {nickName}
                                    </span>
                                    ))}
                                </h2>
                                </Collapse>

                            </Grid>
                        </>
                    )
                    : null
            }
        </>
    )
}

export default OnlinePeople;