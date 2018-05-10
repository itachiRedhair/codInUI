import { combineReducers } from "redux";

import { authReducer, loaderReducer, projectReducer, typeaheadReducer, modalReducer, overviewDataReducer, overviewHeatMapReducer, tsLintHeatMapReducer,  contributorReducer } from "./../modules";

export default combineReducers({
  authReducer,
  loaderReducer,
  projectReducer,
  typeaheadReducer,
  modalReducer,
  contributorReducer,
  overviewDataReducer,
  overviewHeatMapReducer,
  tsLintHeatMapReducer
});
