import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Procced from "./proceed";
import history from './history';
import App from './App';
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Proceed" component={Procced} />
                </Switch>
            </Router>
        )
    }
}