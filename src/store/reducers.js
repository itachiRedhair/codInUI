import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import { authReducer, loaderReducer, projectReducer, typeaheadReducer, modalReducer, contributorReducer, reportReducer, recentReducer, userReducer, projectModalReducer, inviteReducer, notificationReducer } from './../modules';

export default combineReducers({
  authReducer,
  loaderReducer,
  projectReducer,
  typeaheadReducer,
  modalReducer,
  contributorReducer,
  reportReducer,
  recentReducer,
  userReducer,
  projectModalReducer,
  toastr: toastrReducer,
  inviteReducer,
  notificationReducer
});
