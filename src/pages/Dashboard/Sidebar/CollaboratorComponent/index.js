import Collaborator from "./CollaboratorComponent.jsx";

import { connect } from "react-redux";

//action creators
import { userSuggestions } from "../../../../modules/typeahead";
import { setModalState } from "../../../../modules/modalState";
import { registerCollaborator } from "../../../../modules/collaborator.js";

const mapDispatchToProps = {
    userSuggestions,
    setModalState,
    registerCollaborator
};

const mapStateToProps = state => {
  return {
    names: state.typeaheadReducer.names,
    showModal: state.modalReducer.showModal
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collaborator);
