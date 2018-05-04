import { combineReducers } from "redux";

import { authReducer, loaderReducer, projectReducer } from "./../modules";

export default combineReducers({
  authReducer,
  loaderReducer,
  projectReducer
});
