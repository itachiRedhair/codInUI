import { connect } from 'react-redux';
import ContributorModal from './CollaboratorComponent.jsx';

// action creators
import { userSuggestions } from '../../../../modules/typeahead';
import { setModalState } from '../../../../modules/modalState';
import { sendInvitation } from '../../../../modules/invitation';
import { registerCollaborator } from '../../../../modules/collaborator.js';

const mapDispatchToProps = {
  userSuggestions,
  setModalState,
  registerCollaborator,
  sendInvitation,
};

const mapStateToProps = (state) => ({
  names: state.typeaheadReducer.names,
  showModal: state.modalReducer.showModal,
  projectId: state.activeProjectReducer.projectId,
  contributors: state.activeProjectReducer.contributors,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributorModal);
