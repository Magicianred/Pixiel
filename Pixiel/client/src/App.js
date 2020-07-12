import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";

//Pagina CSS creata da me
import "./index.css";

const App = () => {

    return (
        <Router>

            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>

            <Footer />

        </Router>
    );
};

export default App;