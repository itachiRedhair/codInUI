import { combineReducers } from "redux";

import { authReducer, loaderReducer, projectReducer, typeaheadReducer, modalReducer, overviewDataReducer, overviewHeatMapReducer, tsLintHeatMapReducer } from "./../modules";

export default combineReducers({
  authReducer,
  loaderReducer,
  projectReducer,
  typeaheadReducer,
  modalReducer,
  overviewDataReducer,
  overviewHeatMapReducer,
  tsLintHeatMapReducer
});
