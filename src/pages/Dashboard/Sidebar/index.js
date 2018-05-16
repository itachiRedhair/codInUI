import Sidebar from "./Sidebar.jsx";
import { connect } from "react-redux";

//action creators
import { createProject, showProject, setProjectId } from "./../../../modules/project";
import { setModalState } from "./../../../modules/modalState";
import { listTslintReport } from "./../../../modules/report";

const mapDispatchToProps = {
  createProject,
  showProject,
  setModalState,
  setProjectId,
  listTslintReport
};

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects,
    showModal: state.modalReducer.showModal,
    projectId: state.projectReducer.projectId,
    uid: state.authReducer.uid
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Sidebar);
