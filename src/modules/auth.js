//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

// ------------------------------------
// Constants
// ------------------------------------
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

// ------------------------------------
// Action Creators
// ------------------------------------

const logIn = () => ({
    type: AUTH_LOGIN
});

const logOut = () => ({
    type: AUTH_LOGOUT
});

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const userLogOut = () => (dispatch, getState) => { };

export const userLogIn = (username, password) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        dispatch(setLoadingStatus(true));

        setTimeout(() => {
            dispatch(logIn());
            dispatch(setLoadingStatus(false));
            resolve();
        }, 1500); 
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
