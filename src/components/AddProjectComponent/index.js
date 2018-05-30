import AddProjectComponent from './AddProjectComponent.jsx';
import { connect } from 'react-redux';

import { createProject } from '../../modules/project';
import { setProjectModalState } from '../../modules/projectModalState';

const mapDispatchToProps = {
  createProject,
  setProjectModalState,
};

const mapStateToProps = state => ({
  showProjectModal: state.projectModalReducer.showProjectModal,
});


export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(AddProjectComponent);
