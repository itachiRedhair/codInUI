import { connect } from 'react-redux';
import Sidebar from './Sidebar.jsx';

// action creators
import { setModalState } from './../../../modules/modalState';

const mapDispatchToProps = {
  setModalState,
};

const mapStateToProps = (state) => ({
  showModal: state.modalReducer.showModal,
  projectId: state.activeProjectReducer.projectId,
  projectName: state.activeProjectReducer.projectName,
  projectType: state.activeProjectReducer.projectType,
  createdAt: state.activeProjectReducer.createdAt,
  contributors: state.activeProjectReducer.contributors,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
