import { connect } from 'react-redux';

import AddProjectComponent from './AddProjectComponent.jsx';
import { createProject } from '../../modules/project';
import { setProjectModalState } from '../../modules/modalState';

const mapDispatchToProps = {
  createProject,
  setProjectModalState
};

const mapStateToProps = (state) => ({
  showProjectModal: state.modalReducer.showProjectModal,
  projectTypes: state.modalReducer.projectTypes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProjectComponent);
