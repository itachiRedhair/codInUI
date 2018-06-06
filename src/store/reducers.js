import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import reducers from './../modules';

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
