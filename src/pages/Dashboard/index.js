import { connect } from 'react-redux';
import DashboardComponent from './DashboardComponent.jsx';
import { fetchProjectInfo, setSubmittedAt } from '../../modules/activeProject';

const mapDispatchToProps = {
  fetchProjectInfo,
  setSubmittedAt,
};

export default connect(
  null,
  mapDispatchToProps
)(DashboardComponent);
