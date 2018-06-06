import { connect } from 'react-redux';
import Overview from './Overview.jsx';

// action creators

const mapStateToProps = state => ({
  reports: state.reportReducer,
  projectId: state.projectReducer.projectId,
});

export default connect(mapStateToProps, null, null, {
  pure: false,
})(Overview);
