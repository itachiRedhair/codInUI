import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Components imports
import Overview from "./../Overview";
import TSLintReport from "./../TSLintReport";
import Coverage from "./../Coverage";
import DashboardComponent from "../DashboardComponent.jsx";

//Styles imports
import "./Content.scss";

export default class Content extends Component {
  render() {
    return (
      <div className="content-container">
        <Switch>
          <Route exact path="/dashboard/overview" component={Overview} />
          <Route exact path="/dashboard/tslint" component={TSLintReport} />
          <Route exact path="/dashboard/coverage" component={Coverage} />
        </Switch>
      </div>
    );
  }
}
