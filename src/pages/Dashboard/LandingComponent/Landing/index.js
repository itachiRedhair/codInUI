
import Landing from "./Landing.jsx";
import { connect } from "react-redux";

//action creators
import { createProject, showProject, setProjectId, setProjectName } from "./../../../../modules/project";
import { setModalState } from "./../../../../modules/modalState";
import { listTslintReport } from "./../../../../modules/report";
import { recentList } from "./../../../../modules/recent";
import { userDetails } from "./../../../../modules/user";
import { setProjectModalState } from "./../../../../modules/projectModalState";




const mapDispatchToProps = {
  createProject,
  showProject,
  setModalState,
  setProjectId,
  setProjectName,
  listTslintReport,
  recentList,
  userDetails,
  setProjectModalState
};

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects,
    showModal: state.modalReducer.showModal,
    projectId: state.projectReducer.projectId,
    projectName: state.projectReducer.projectName,
    submitList: state.projectReducer.submitList,
    uid: state.authReducer.uid,
    recentData: state.recentReducer.recentData,
    showProjectModal: state.projectModalReducer.showProjectModal
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Landing);
