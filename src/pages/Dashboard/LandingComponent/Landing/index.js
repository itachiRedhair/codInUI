
import Landing from "./Landing.jsx";
import { connect } from "react-redux";

//action creators
import { createProject, showProject, setProjectId, setProjectName, submissionList } from "./../../../../modules/project";
import { setModalState } from "./../../../../modules/modalState";
import { listTslintReport } from "./../../../../modules/report";

const mapDispatchToProps = {
  createProject,
  showProject,
  setModalState,
  setProjectId,
  setProjectName,
  submissionList,
  listTslintReport
};

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects,
    showModal: state.modalReducer.showModal,
    projectId: state.projectReducer.projectId,
    projectName: state.projectReducer.projectName,
    submitList: state.projectReducer.submitList,
    uid: state.authReducer.uid
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Landing);
