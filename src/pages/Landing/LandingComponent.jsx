import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components imports
import Landing from './Landing';
import FirstRender from './FirstRender';
import CustomNavbar from '../../commonui/CustomNavbar';

// Styles imports
import './LandingComponent.scss';

export default class LandingComponent extends Component {
  componentDidMount() {
    this.props.showProject();
  }

  render() {
    const viewToRender = this.props.projects.length > 0
      ? <Route exact path="/landing" component={Landing} />
      : <FirstRender />;

    return (
      <div>
        <CustomNavbar />
        <Switch>
          {viewToRender}
        </Switch>
      </div>
    );
  }
}
