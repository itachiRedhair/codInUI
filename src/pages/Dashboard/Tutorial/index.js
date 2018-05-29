import Tutorial from "./Tutorial.jsx";
import { connect } from "react-redux";

//action creators
import { listTslintReport } from "../../../modules/report";
import { showProject } from "../../../modules/project";
import { userDetails } from "../../../modules/user";


const mapDispatchToProps = {
    showProject,
    listTslintReport,
    userDetails
};

const mapStateToProps = state => {
  return {
    projects: state.projectReducer.projects,
    reportList: state.reportReducer.reportList,
    projectId: state.projectReducer.projectId,
    projectName: state.projectReducer.projectName,
    user: state.userReducer.user    
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Tutorial);