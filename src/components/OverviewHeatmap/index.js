import OverviewHeatmap from './OverviewHeatmap.jsx';
import { connect } from 'react-redux';

// action creators
import { listTslintReport } from '../../modules/report';

const mapDispatchToProps = {
  listTslintReport,
};

const mapStateToProps = state => ({
  reportList: state.reportReducer.reportList,
  projectId: state.projectReducer.projectId,
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(OverviewHeatmap);
