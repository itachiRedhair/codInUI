// constants imports
import constants from './../constants';
import { showToast } from './toaster';

// Action Creator Imports
import { setLoadingStatus } from './loader.js';

// API imports
import {
  loginRequest,
  logoutRequest,
  signUpRequest,
  changePasswordRequest,
} from './../utilities/api';

// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP = 'SIGNUP';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const IS_SIGNEDUP = 'IS_SIGNEDUP';
const { TYPE_SUCCESS, TYPE_ERROR } = constants.toaster;

// ------------------------------------
// Action Creators
// ------------------------------------

const signup = () => ({
  type: SIGNUP,
});

const login = (userResponse) => ({
  type: AUTH_LOGIN,
  payload: userResponse,
});

const logOut = () => ({
  type: AUTH_LOGOUT,
});

const isSignedUp = () => ({
  type: IS_SIGNEDUP,
});
// ------------------------------------
// Thunk Action Creators
// ------------------------------------

// TODO: Use status code rather than msg
export const userLogOut = () => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));

    logoutRequest()
      .then((response) => {
        dispatch(setLoadingStatus(false));
        if (response.message === constants.responseMessage.LOGGED_OUT) {
          dispatch(logOut());
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        dispatch(setLoadingStatus(false));
        resolve(false);
      });
  });

export const userLogIn = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    loginRequest({ email, password })
      .then((response) => {
        dispatch(setLoadingStatus(false));
        dispatch(login(response));
        dispatch(showToast({ type: TYPE_SUCCESS, msg: 'Login Successful' }));
        resolve(response);
      })
      .catch((err) => {
        dispatch(setLoadingStatus(false));
        dispatch(showToast({ type: TYPE_ERROR, msg: err.message }));
        reject(err.message);
      });
  });

export const userSignUp = (name, email, password, confirm) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    signUpRequest({ name, email, password, confirm })
      .then(() => {
        dispatch(setLoadingStatus(false));
        dispatch(signup());
        dispatch(isSignedUp());
        dispatch(showToast({ type: TYPE_SUCCESS, msg: 'registered successfully' }));
        resolve(true);
      })
      .catch((err) => {
        dispatch(setLoadingStatus(false));
        dispatch(showToast({ type: TYPE_ERROR, msg: err.message }));
        reject(err.message);
        // resolve(false);
      });
  });

export const changePassword = (email, oldPassword, newPassword, confirmNewPassword) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    changePasswordRequest( email, oldPassword, newPassword, confirmNewPassword )
      .then(() => {
        console.log('---inside change reducer success----');
        dispatch(setLoadingStatus(false));
        dispatch(showToast({ type: TYPE_SUCCESS, msg: 'Password Changed Successfully' }));
        resolve(true);
      })
      .catch((err) => {
        console.log('---inside change reducer failure----');
        dispatch(setLoadingStatus(false));
        dispatch(showToast({ type: TYPE_ERROR, msg: err.message }));
        reject(err.message);
        // resolve(false);
      });
  });

export const actions = {
  userSignUp,
  userLogIn,
  userLogOut,
  login,
  isSignedUp,
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [SIGNUP]: (state) => ({
    ...state,
  }),
  [IS_SIGNEDUP]: (state) => ({
    ...state,
    signedUp: true,
  }),
  [AUTH_LOGIN]: (state, { payload: { name, email, _id } }) => ({
    ...state,
    isAuthenticated: true,
    user: { name, email, id: _id },
  }),
  [AUTH_LOGOUT]: (state) => ({
    state: undefined,
    isAuthenticated: false,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isAuthenticated: false,
  signedUp: false,
  user: {},
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
