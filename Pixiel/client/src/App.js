import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";

//Material UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//Pagina CSS creata da me
import "./index.css";

const App = () => {
    const theme = createMuiTheme(
        {
            typography: {
                button: {
                    fontFamily: "Nishuki Pixels"
                },
                h1: {
                    fontFamily: "Monster Friend Fore",
                },
            }
        });

    return (
        <Router>

            <MuiThemeProvider theme={theme}>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>

            <Footer />
            </MuiThemeProvider>

        </Router>
    );
};

export default App;