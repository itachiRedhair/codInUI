import { connect } from 'react-redux';
import Tutorial from './Tutorial.jsx';

// action creators
import { showProject } from '../../../modules/project';

const mapDispatchToProps = {
  showProject,
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
  projectName: state.activeProjectReducer.projectName,
  user: state.authReducer.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorial);
