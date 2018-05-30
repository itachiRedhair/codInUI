import Sidebar from './Sidebar.jsx';
import { connect } from 'react-redux';

// action creators
import { createProject, showProject, setProjectId, submissionList, setProjectName, setProjectType } from './../../../modules/project';
import { setModalState } from './../../../modules/modalState';
import { setProjectModalState } from './../../../modules/projectModalState';
import { listTslintReport } from './../../../modules/report';
import { userDetails } from './../../../modules/user';

const mapDispatchToProps = {
  createProject,
  showProject,
  setModalState,
  setProjectModalState,
  setProjectId,
  setProjectName,
  setProjectType,
  listTslintReport,
  submissionList,
  userDetails,
};

const mapStateToProps = state => ({
  projects: state.projectReducer.projects,
  showModal: state.modalReducer.showModal,
  projectId: state.projectReducer.projectId,
  projectName: state.projectReducer.projectName,
  projectType: state.projectReducer.projectType,
  uid: state.authReducer.uid,
  user: state.userReducer.user,
  showProjectModal: state.projectModalReducer.showProjectModal,
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Sidebar);
