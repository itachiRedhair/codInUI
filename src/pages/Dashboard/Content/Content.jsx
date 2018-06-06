import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components imports
import Overview from './../Overview';
import TSLintReport from './../TSLintReport';
// import DashboardComponent from "../DashboardComponent.jsx";

// Styles imports
import './Content.scss';

const Content = () => (
  <div className="content-container">
    <Switch>
      <Route exact path="/dashboard/overview" component={Overview} />
      <Route exact path="/dashboard/tslint" component={TSLintReport} />
      {/* <Route exact path="/dashboard/coverage" component={Coverage} /> */}
    </Switch>
  </div>
);

export default Content;
