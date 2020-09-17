import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Material UI
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Pagina CSS creata da me
import "./index.css";

//Componenti creati da me
import Home from "./components/pages/Home";
import Chat from "./components/pages/Chat";
import Credits from "./components/pages/Credits";


//Style con la palette primaria e secondaria e anche di alcuni elementi presenti sul sito
const theme = createMuiTheme(
    {
        palette: {
            primary: {
                light: '#484848',
                main: '#212121',
                dark: '#000000',
                contrastText: '#fff',
            },
            secondary: {
                light: '#9a67ea',
                main: '#673ab7',
                dark: '#320b86',
                contrastText: '#fff',
            },
        },
        typography: {
            button: {
                fontFamily: "Dogica Pixel Bold"
            },
            body1: {
                fontFamily: "Dogica Pixel Bold"
            },
            body2: {
                fontFamily: "Dogica Pixel"
            },
        }
    });


const App = () => {
    return (
        <Router>

            <ThemeProvider theme={theme}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/chat" component={Chat} />
                <Route path="/credits" component={Credits} />
            </Switch>

            </ThemeProvider>

        </Router>
    );
};

export default App;