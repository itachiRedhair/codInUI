
import TSLintBar from './TSLintBar.jsx';
import { connect } from 'react-redux';

// action creators
import { listTslintReport, listTslintReportDetails } from '../../modules/report';

const mapDispatchToProps = {
  listTslintReport,
  listTslintReportDetails,
};

const mapStateToProps = state => ({
  reportList: state.reportReducer.reportList,
  reportListDetails: state.reportReducer.reportListDetails,
  projectId: state.projectReducer.projectId,
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(TSLintBar);
