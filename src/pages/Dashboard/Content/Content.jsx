import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Components imports
import Overview from "./../Overview";

//Styles imports
import "./Content.scss";

export default class Content extends Component {
    render() {
        return (
            <div className="content-container">
                <Switch>
                    <Route exact path="/dashboard/overview" component={Overview} />
                </Switch>
            </div>
        );
    }
}
