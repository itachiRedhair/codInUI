import authReducer from './auth';
import loaderReducer from './loader';
import projectReducer from './project';
import typeaheadReducer from './typeahead';
import modalReducer from './modalState';
import contributorReducer from './collaborator';
import reportReducer from './report';
import recentReducer from './recent';
import userReducer from './user';
import projectModalReducer from './projectModalState';
import inviteReducer from './invitation';
import notificationReducer from './notification';
import toasterReducer from './toaster';
import { reducer as toastrReducer } from 'react-redux-toastr';


const appReducers = {
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
  toasterReducer,
  toastr: toastrReducer
}

export default appReducers;

