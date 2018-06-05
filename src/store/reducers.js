import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import {
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
  inviteReducer,
  notificationReducer,
  toasterReducer
} from './../modules';

const appReducer = combineReducers({
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
  notificationReducer,
  toasterReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
