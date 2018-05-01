import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";

//Components imports
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import Loader from "./../components/Loader";

//Styles imports
import "./../styles/_theme.scss";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Loader />
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
