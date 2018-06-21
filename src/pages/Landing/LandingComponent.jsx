import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

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
        <div className="container">{viewToRender}</div>
      </div>
    );
  }
}

export default LandingComponent;

LandingComponent.propTypes = {
  showProject: PropTypes.func.isRequired,
  fetchUnseenNotifications: PropTypes.func.isRequired,
  fetchAllNotifications: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
