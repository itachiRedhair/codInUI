import Sidebar from "./Sidebar.jsx";
import { connect } from "react-redux";

//action creators
import { createProject, showProject, setProjectId } from "./../../../modules/project";
import { setModalState } from "./../../../modules/modalState";

const mapDispatchToProps = {
  createProject,
  showProject,
  setModalState,
  setProjectId
};

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects,
    showModal: state.modalReducer.showModal,
    projectId: state.projectReducer.projectId
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Sidebar);
