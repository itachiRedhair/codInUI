import Tutorial from "./Tutorial.jsx";
import { connect } from "react-redux";

//action creators
import { listTslintReport } from "../../../modules/report";
import { showProject } from "../../../modules/project";


const mapDispatchToProps = {
    showProject,
    listTslintReport
};

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects,
    reportList: state.reportReducer.reportList,
    projectId: state.projectReducer.projectId,
    projectName: state.projectReducer.projectName,
    user: state.authReducer.user    
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Tutorial);