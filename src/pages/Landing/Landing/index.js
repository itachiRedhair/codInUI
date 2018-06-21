import { connect } from 'react-redux';
import Landing from './Landing.jsx';

// action creators
import { recentList } from './../../../modules/recent';
import { setProjectModalState } from './../../../modules/modalState';

const mapDispatchToProps = {
  recentList,
  setProjectModalState,
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
  recentData: state.recentReducer.recentData,
  showProjectModal: state.modalReducer.showProjectModal,
  showChangePasswordModal: state.modalReducer.showChangePasswordModal,
  user: state.authReducer.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
