import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Components imports
import Landing from "./Landing";

//Styles imports
import "./LandingComponent.scss";

export default class LandingComponent extends Component {
    render() {
        return (
            <div className="LandingComponent-container">
                <Switch>
                    <Route exact path="/landing" component={Landing} />
                </Switch>
            </div>
        );
    }
}
