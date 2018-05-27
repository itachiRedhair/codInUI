//constants imports
import constants from "./../constants";
import config from "./../../config";

//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import { getUser } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------

export const USER_DATA = "USER_DATA";

// ------------------------------------
// Action Creators
// ------------------------------------

const showUsers = userResponse => ({
  type: USER_DATA,
  payload: userResponse
});


// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const userDetails = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));   
    getUser()
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(showUsers(response));
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => {
        dispatch(setLoadingStatus(false));
        console.log(err);
        resolve(false);
      });
  });
};

export const actions = {
  showUsers
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [USER_DATA]: (state, action) => ({
    ...state,
    user: action.payload
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  user: ""
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
