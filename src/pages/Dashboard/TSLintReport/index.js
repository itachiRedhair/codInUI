import { connect } from 'react-redux';
import TSLintReport from './TSLintReport.jsx';

// action creators

const mapStateToProps = (state) => ({
  reports: state.reportReducer,
  projectId: state.projectReducer.projectId
});

export default connect(
  mapStateToProps,
  null
)(TSLintReport);
