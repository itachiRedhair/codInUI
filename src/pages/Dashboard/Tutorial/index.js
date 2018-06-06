import { connect } from 'react-redux';
import Tutorial from './Tutorial.jsx';

// action creators
import { showProject } from '../../../modules/project';
import { userDetails } from '../../../modules/user';


const mapDispatchToProps = {
  showProject,
  userDetails,
};

const mapStateToProps = state => ({
  projects: state.projectReducer.projects,
  projectName: state.projectReducer.projectName,
  user: state.userReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Tutorial);
