import { connect } from 'react-redux';

import LandingComponent from './LandingComponent.jsx';
// action creators
import { showProject } from './../../modules/project';
import { fetchUnseenNotifications, fetchAllNotifications } from './../../modules/notification';
import { userDetails } from './../../modules/user';

const mapDispatchToProps = {
  showProject,
  fetchUnseenNotifications,
  fetchAllNotifications,
  userDetails
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
  unseenNotifications: state.notificationReducer.unseenNotifications
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: false
  }
)(LandingComponent);
