
import TSLintSummary from "./TSLintSummary.jsx";
import { connect } from "react-redux";

//action creators
import { listTslintReport } from "../../modules/report";

const mapDispatchToProps = {
    listTslintReport
};

const mapStateToProps = state => {
  return {
    projectId: state.projectReducer.projectId
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(TSLintSummary);
