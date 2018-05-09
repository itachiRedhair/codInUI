//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import { projectRegisterRequest, getUserProject } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const PROJECT_REGISTER = "PROJECT_REGISTER";
export const SHOW_USER_PROJECT = "SHOW_USER_PROJECT";
export const SET_PROJECT_ID = "SET_PROJECT_ID";

// ------------------------------------
// Action Creators
// ------------------------------------

const registerProject = project => ({
  type: PROJECT_REGISTER,
  payload: project
});

const listProject = projects => ({
  type: SHOW_USER_PROJECT,
  payload: projects
});

export const setProjectId = projectId => ({
    type :SET_PROJECT_ID,
    payload: projectId
})
// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const createProject = name => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    projectRegisterRequest(name)
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(registerProject(response.project));
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
  showProject,
  
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [PROJECT_REGISTER]: (state, action) => ({
    ...state,
    projects: [...state.projects, action.payload],
    isProjectUploaded: true
  }),
  [SHOW_USER_PROJECT]: (state, action) => ({
    ...state,
    projects: [...action.payload]
  }),
  [SET_PROJECT_ID]: (state, action) => ({
      ...state,
      projectId: action.payload
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isProjectUploaded: false,
  projects: [],
  projectId: ""
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
