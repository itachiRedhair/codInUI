//constants imports
import constants from "./../constants";
import config from "./../../config";

//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import { getUserSuggestions } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const GET_SUGGESTIONS = "GET_SUGGESTIONS";

// ------------------------------------
// Action Creators
// ------------------------------------

const typeahead = () => ({
  type: GET_SUGGESTIONS
});

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const userLogOut = () => (dispatch, getState) => {};

export const userLogIn = (email, password) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));

    loginRequest({ email, password })
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(login());
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
  typeahead
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [GET_SUGGESTIONS]: (state, action) => ({
    ...state
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isAuthenticated: false
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
