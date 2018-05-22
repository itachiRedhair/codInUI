import Sidebar from "./Sidebar.jsx";
import { connect } from "react-redux";

//action creators
import { createProject, showProject, setProjectId, submissionList } from "./../../../modules/project";
import { setModalState } from "./../../../modules/modalState";
import { listTslintReport } from "./../../../modules/report";

const mapDispatchToProps = {
  createProject,
  showProject,
  setModalState,
  setProjectId,
  listTslintReport,
  submissionList
};

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects,
    showModal: state.modalReducer.showModal,
    projectId: state.projectReducer.projectId,
    projectName: state.projectReducer.projectName,
    uid: state.authReducer.uid
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Sidebar);
