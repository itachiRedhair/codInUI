import { connect } from 'react-redux';
import Sidebar from './Sidebar.jsx';

// action creators
import { showProject, setProjectId, submissionList, setProjectName } from './../../../modules/project';
import { setModalState } from './../../../modules/modalState';
import { listTslintReport } from './../../../modules/report';
import { userDetails } from './../../../modules/user';

const mapDispatchToProps = {
  showProject,
  setModalState,
  setProjectId,
  setProjectName,
  listTslintReport,
  submissionList,
  userDetails,
};

const mapStateToProps = state => ({
  showModal: state.modalReducer.showModal,
  projectId: state.projectReducer.projectId,
  projectName: state.projectReducer.projectName,
  projectType: state.projectReducer.projectType,
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Sidebar);
