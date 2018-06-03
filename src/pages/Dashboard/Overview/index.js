import Overview from './Overview.jsx';
import { connect } from 'react-redux';

// action creators
import { listTslintReport } from '../../../modules/report';

const mapDispatchToProps = {
  listTslintReport,
};

const mapStateToProps = state => ({
  isLoading: state.loaderReducer.isLoading,
  reports: state.reportReducer,
  projectId: state.projectReducer.projectId,
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(Overview);
