import { connect } from 'react-redux';
import Landing from './Landing.jsx';

// action creators
import {
  showProject,
  setProjectId,
  setProjectName,
  setProjectType
} from '../../../modules/project';
import { listTslintReport } from './../../../modules/report';
import { recentList } from './../../../modules/recent';
import { userDetails } from './../../../modules/user';
import { setProjectModalState } from './../../../modules/projectModalState';

const mapDispatchToProps = {
  showProject,
  setProjectId,
  setProjectName,
  setProjectType,
  listTslintReport,
  recentList,
  userDetails,
  setProjectModalState
};

const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
  recentData: state.recentReducer.recentData,
  showProjectModal: state.projectModalReducer.showProjectModal
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
