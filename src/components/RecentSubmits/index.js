
import RecentSubmit from "./RecentSubmits.jsx";
import { connect } from "react-redux";

//action creators
import { submissionList } from "../../modules/project";

const mapDispatchToProps = {
    submissionList
};

const mapStateToProps = state => {
  return {
    submitList: state.projectReducer.submitList,
    projectId: state.projectReducer.projectId
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(RecentSubmit);
