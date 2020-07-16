import React from 'react';
import PropTypes from "prop-types";

//Material-UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";


//Colore e style del bottone per l'accesso
const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(deepPurple[500]),
        fontSize: 20,
        backgroundColor: deepPurple[500],
        '&:hover': {
            backgroundColor: deepPurple[300],
        },
    },
}))(Button);

function Home( props ) {
    const { classes } = props;
    return (
        <>
                <Container className={classes} fixed>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >

                            <Typography variant="h1">
                                Pixiel
                            </Typography>
                        <ColorButton variant="contained" color="primary" size="large">
                            Accedi
                        </ColorButton>
                    </Grid>
                </Container>
        </>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default Home;