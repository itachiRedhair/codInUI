import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from './auth';
import loaderReducer from './loader';
import projectReducer from './project';
import typeaheadReducer from './typeahead';
import modalReducer from './modalState';
import contributorReducer from './collaborator';
import recentReducer from './recent';
import inviteReducer from './invitation';
import notificationReducer from './notification';
import toasterReducer from './toaster';
import activeProjectReducer from './activeProject';

const appReducers = {
  authReducer,
  loaderReducer,
  projectReducer,
  typeaheadReducer,
  modalReducer,
  contributorReducer,
  recentReducer,
  inviteReducer,
  notificationReducer,
  toasterReducer,
  toastr: toastrReducer,
  activeProjectReducer,
};

export default appReducers;
