import { combineReducers } from "redux";

import { authReducer, loaderReducer, projectReducer, typeaheadReducer, modalReducer, overviewDataReducer } from "./../modules";

export default combineReducers({
  authReducer,
  loaderReducer,
  projectReducer,
  typeaheadReducer,
  modalReducer,
  overviewDataReducer
});
