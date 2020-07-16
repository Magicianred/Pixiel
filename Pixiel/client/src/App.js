import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import StickyFooter from "./components/layout/StickyFooter";

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
                    fontFamily: "Monster Friend Fore"
                },
                body1: {
                    fontFamily: "Nishuki Pixels"
                },
            }
        });

    return (
        <Router>

            <MuiThemeProvider theme={theme}>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>

            <StickyFooter />
            </MuiThemeProvider>

        </Router>
    );
};

export default App;