import React from 'react';

//Material-UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(2, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
    },
    typography: {
        [theme.breakpoints.only('xs')]: {
            fontSize: 14,
        },
    },
    link: {
        color: theme.palette.secondary.light,

    }
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1" color="inherit" className={classes.typography}>
                        <Link href="/Credits" className={classes.link} underline="hover">Crediti</Link>
                        <br />
                        {'© 2020 '}
                        <Link color="inherit" href="https://www.carmensantoro.it">
                            Carmen Agnese Santoro
                        </Link>
                    </Typography>
                </Container>
            </footer>
        </>
    );
}