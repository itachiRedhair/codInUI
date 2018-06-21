import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components imports
import Overview from './../Overview';
import TSLintReport from './../TSLintReport';
import Coverage from './../Coverage';
// import DashboardComponent from "../DashboardComponent.jsx";

// Styles imports
import './Content.scss';

const Content = () => (
  <div className="content-container">
    <Switch>
      <Route exact path="/projects/:projectId/:submittedAt/dashboard/overview" component={Overview} />
      <Route exact path="/projects/:projectId/:submittedAt/dashboard/tslint" component={TSLintReport} />
      <Route exact path="/projects/:projectId/:submittedAt/dashboard/coverage" component={Coverage} />
    </Switch>
  </div>
);

export default Content;
