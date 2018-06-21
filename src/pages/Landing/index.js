import { connect } from 'react-redux';

import LandingComponent from './LandingComponent.jsx';
// action creators
import { showProject } from './../../modules/project';
import { fetchUnseenNotifications, fetchAllNotifications } from './../../modules/notification';

const mapDispatchToProps = {
  showProject,
  fetchUnseenNotifications,
  fetchAllNotifications,
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
  unseenNotifications: state.notificationReducer.unseenNotifications,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingComponent);
