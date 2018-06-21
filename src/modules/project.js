import constants from './../constants';
import { setLoadingStatus } from './loader.js';
import { showToast } from './toaster';

// API imports
import { projectRegisterRequest, getUserProject } from './../utilities/api';

// ------------------------------------
// Constants
// ------------------------------------

export const PROJECT_REGISTER = 'PROJECT_REGISTER';
export const SHOW_USER_PROJECT = 'SHOW_USER_PROJECT';
const { TYPE_SUCCESS, TYPE_ERROR } = constants.toaster;

// ------------------------------------
// Action Creators
// ------------------------------------

const registerProject = (project) => ({
  type: PROJECT_REGISTER,
  payload: project,
});

const listProject = (projects) => ({
  type: SHOW_USER_PROJECT,
  payload: projects,
});

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const createProject = (name, type) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    projectRegisterRequest(name, type)
      .then((response) => {
        dispatch(setLoadingStatus(false));
        dispatch(registerProject(response.project));
        dispatch(showToast({ type: TYPE_SUCCESS, msg: 'Project Added' }));
        resolve(true);
      })
      .catch((err) => {
        dispatch(setLoadingStatus(false));
        dispatch(showToast({ type: TYPE_ERROR, msg: err.message }));
        reject(err.message);
      });
  });

export const showProject = () => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    getUserProject()
      .then((response) => {
        dispatch(listProject(response));
        resolve(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
    isProjectUploaded: true,
  }),
  [SHOW_USER_PROJECT]: (state, action) => ({
    ...state,
    projects: [...action.payload],
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isProjectUploaded: false,
  projects: [],
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
