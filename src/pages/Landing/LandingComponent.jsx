import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// Components imports
import Landing from './Landing';
import FirstRender from './FirstRender';
import CustomNavbar from '../../commonui/CustomNavbar';

// Styles imports
import './LandingComponent.scss';

class LandingComponent extends Component {
  componentDidMount() {
    this.props.showProject();
    this.props.fetchUnseenNotifications();
    this.props.fetchAllNotifications();
    this.props.userDetails();
  }

  render() {
    const viewToRender =
      this.props.projects.length > 0 ? (
        <Route exact path="/landing" component={Landing} />
      ) : (
        <FirstRender />
      );

    return (
      <div>
        <CustomNavbar />
        <Switch>
          <div className="container">{viewToRender}</div>
        </Switch>
      </div>
    );
  }
}

export default LandingComponent;

LandingComponent.propTypes = {
  showProject: PropTypes.func.isRequired,
  fetchUnseenNotifications: PropTypes.func.isRequired,
  fetchAllNotifications: PropTypes.func.isRequired,
  userDetails: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};
