import { connect } from 'react-redux';
import FirstRender from './FirstRender.jsx';

// action creators
import { setProjectModalState } from './../../../modules/modalState';

const mapDispatchToProps = {
  setProjectModalState,
};

const mapStateToProps = (state) => ({
  showProjectModal: state.modalReducer.showProjectModal,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstRender);
