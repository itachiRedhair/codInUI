//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import { projectRegisterRequest, getUserProject } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const PROJECT_REGISTER = "PROJECT_REGISTER";
export const SHOW_USER_PROJECT = "SHOW_USER_PROJECT";

// ------------------------------------
// Action Creators
// ------------------------------------

const registerProject = () => ({
  type: PROJECT_REGISTER
});

const listProject = projects => ({
  type: SHOW_USER_PROJECT,
  payload: projects
});

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const createProject = name => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));

    projectRegisterRequest({ name })
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(registerProject());
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

export const showProject = () => (dispatch, getState) => {
  getUserProject()
    .then(response => {
      if (response) {
        console.log(response);
        dispatch(listProject(response));
      } else {
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const actions = {
  createProject,
  showProject
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [PROJECT_REGISTER]: (state, action) => ({
    ...state,
    isProjectUploaded: true
  }),
  [SHOW_USER_PROJECT]: (state, action) => ({
    ...state,
    projects: action.payload
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isProjectUploaded: false
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
