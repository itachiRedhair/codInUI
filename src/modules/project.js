//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import { projectRegisterRequest, getUserProject, getRecentSubmits } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------

export const PROJECT_REGISTER = "PROJECT_REGISTER";
export const SHOW_USER_PROJECT = "SHOW_USER_PROJECT";
export const SET_PROJECT_ID = "SET_PROJECT_ID";
export const SET_PROJECT_NAME = "SET_PROJECT_NAME";
export const SHOW_SUBMIT_LIST = "SHOW_SUBMIT_LIST";

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

const showSubmits = list => ({
  type: SHOW_SUBMIT_LIST,
  payload: list
})

export const setProjectId = projectId => ({
  type: SET_PROJECT_ID,
  payload: projectId
});

export const setProjectName = projectName => ({
  type: SET_PROJECT_NAME,
  payload: projectName
})
// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const createProject = (name, type) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    projectRegisterRequest(name, type)
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
        console.log("------project response-----", response);
        dispatch(listProject(response));
      } else {
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const submissionList = projectId => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    getRecentSubmits(projectId)
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(showSubmits(response));
          resolve(response);
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
  createProject,
  showProject
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
  }),
  [SET_PROJECT_NAME]: (state, action) => ({
    ...state,
    projectName: action.payload
  }),
  [SHOW_SUBMIT_LIST]: (state, action) => ({
    ...state,
    submitList: [...action.payload]
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isProjectUploaded: false,
  projects: [],
  submitList: [],
  projectId: "",
  projectName: ""
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
