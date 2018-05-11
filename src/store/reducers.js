import { combineReducers } from "redux";

import { authReducer, loaderReducer, projectReducer, typeaheadReducer, modalReducer, contributorReducer } from "./../modules";

export default combineReducers({
  authReducer,
  loaderReducer,
  projectReducer,
  typeaheadReducer,
  modalReducer,
  contributorReducer
});
