import { connect } from 'react-redux';
import TSLintReport from './TSLintReport.jsx';

// action creators

const mapStateToProps = (state) => ({
  projectReports: state.activeProjectReducer.reportList,
  reportDetails: state.activeProjectReducer.reportListDetails,
  submittedAt: state.activeProjectReducer.submittedAt,
  isFetching: state.activeProjectReducer.isFetching,
});

export default connect(
  mapStateToProps,
  null
)(TSLintReport);
