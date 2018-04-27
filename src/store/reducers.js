import { combineReducers } from "redux";

import { authReducer, loaderReducer } from "./../modules";

export default combineReducers({
  authReducer,
  loaderReducer
});
