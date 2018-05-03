//constants imports
import constants from "./../constants";
import config from "./../../config";

//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import {
  loginRequest,
  logoutRequest,
  signUpRequest,
  projectRegisterRequest
} from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP = "SIGNUP";
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

// ------------------------------------
// Action Creators
// ------------------------------------

const signup = () => ({
  type: SIGNUP
});

const login = () => ({
  type: AUTH_LOGIN
});

const logOut = () => ({
  type: AUTH_LOGOUT
});

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const userLogOut = () => (dispatch, getState) => {
  console.log("userlogout called in auth.js");
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));

    logoutRequest()
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(logOut());
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

export const userSignUp = (name, email, password, confirm) => (
  dispatch,
  getState
) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));

    signUpRequest({ name, email, password, confirm })
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(signup());
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
  userSignUp,
  userLogIn,
  userLogOut,
  login
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [SIGNUP]: (state, action) => ({
    ...state
  }),
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
