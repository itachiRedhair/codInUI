import { combineReducers } from 'redux';
import reducers from './../modules';

const appReducer = combineReducers(reducers);

// Refer: https://stackoverflow.com/a/35641992/5271656
/* eslint-disable no-param-reassign */
const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
