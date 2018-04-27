import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./Homepage";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Loader from "./../components/Loader";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Loader />
                <div>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/dashboard/overview" component={Dashboard} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}
