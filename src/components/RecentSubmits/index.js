
import RecentSubmit from "./RecentSubmits.jsx";
import { connect } from "react-redux";

//action creators
import { submissionList } from "../../modules/project";
import { listTslintReport } from "../../modules/report";

const mapDispatchToProps = {
    submissionList,
    listTslintReport
};

const mapStateToProps = state => {
  return {
    submitList: state.projectReducer.submitList,
    reportList: state.reportReducer.reportList,
    projectId: state.projectReducer.projectId
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(RecentSubmit);
