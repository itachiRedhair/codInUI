import Collaborator from "./CollaboratorComponent.jsx";

import { connect } from "react-redux";

//action creators
import { userSuggestions } from "../../../../modules/typeahead";
import { setModalState } from "../../../../modules/modalState";
import { registerCollaborator, getCollaborators } from "../../../../modules/collaborator.js";

const mapDispatchToProps = {
    userSuggestions,
    setModalState,
    registerCollaborator,
    getCollaborators
};

const mapStateToProps = state => {
  return {
    names: state.typeaheadReducer.names,
    showModal: state.modalReducer.showModal,
    contributors: state.contributorReducer.contributors
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collaborator);
