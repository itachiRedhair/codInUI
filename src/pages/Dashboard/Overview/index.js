import { connect } from 'react-redux';
import Overview from './Overview.jsx';

// action creators

const mapStateToProps = (state) => ({
  projectReports: state.activeProjectReducer.reportList,
  projectSubmits: state.activeProjectReducer.submitList,
  submittedAt: state.activeProjectReducer.submittedAt,
  isFetching: state.activeProjectReducer.isFetching,
});

export default connect(
  mapStateToProps,
  null
)(Overview);
