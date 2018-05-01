//constants imports
import constants from "./../constants";
import config from "./../../config";

//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import {
  loginRequest,
  signUpRequest,
  projectRegisterRequest
} from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

// ------------------------------------
// Action Creators
// ------------------------------------

const login = () => ({
  type: AUTH_LOGIN
});

const logOut = () => ({
  type: AUTH_LOGOUT
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
  userLogIn,
  userLogOut
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [AUTH_LOGIN]: (state, action) => ({
    ...state,
    isAuthenticated: true
  }),
  [AUTH_LOGOUT]: (state, action) => ({
    ...state,
    isAuthenticated: false
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
