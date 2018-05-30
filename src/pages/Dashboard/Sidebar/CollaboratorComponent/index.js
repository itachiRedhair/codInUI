import Collaborator from './CollaboratorComponent.jsx';

import { connect } from 'react-redux';

// action creators
import { userSuggestions } from '../../../../modules/typeahead';
import { setModalState } from '../../../../modules/modalState';
import { sendInvitation } from "../../../../modules/invitation";
import { registerCollaborator, getCollaborators } from '../../../../modules/collaborator.js';

const mapDispatchToProps = {
  userSuggestions,
  setModalState,
  registerCollaborator,
  getCollaborators,
  sendInvitation  
};

const mapStateToProps = state => ({
  names: state.typeaheadReducer.names,
  showModal: state.modalReducer.showModal,
  contributors: state.contributorReducer.contributors,
});

export default connect(mapStateToProps, mapDispatchToProps)(Collaborator);
