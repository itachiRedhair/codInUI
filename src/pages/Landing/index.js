import { connect } from 'react-redux';

import LandingComponent from './LandingComponent.jsx';
// action creators
import { showProject } from './../../modules/project';


const mapDispatchToProps = {
  showProject,
};

const mapStateToProps = state => ({
  projects: state.projectReducer.projects,
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(LandingComponent);
