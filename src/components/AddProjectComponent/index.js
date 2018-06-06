import { connect } from 'react-redux';

import AddProjectComponent from './AddProjectComponent.jsx';
import { createProject } from '../../modules/project';
import { setProjectModalState } from '../../modules/projectModalState';

const mapDispatchToProps = {
  createProject,
  setProjectModalState
};

const mapStateToProps = (state) => ({
  showProjectModal: state.projectModalReducer.showProjectModal,
  projectTypes: state.projectModalReducer.projectTypes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProjectComponent);
