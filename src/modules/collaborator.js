//constants imports
import constants from "./../constants";
import config from "./../../config";

//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import { addCollaborator, getContributors } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_COLLABORATOR = "ADD_COLLABORATOR";
export const SHOW_COLLABORATOR = "SHOW_COLLABORATOR";
// ------------------------------------
// Action Creators
// ------------------------------------

const collaboratorAdded = names => ({
  type: ADD_COLLABORATOR,
  payload: names
});

const showCollaborators = contributors => ({
    type: SHOW_COLLABORATOR,
    payload: contributors
  });
// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const registerCollaborator = ( params ) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    addCollaborator( params )
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(collaboratorAdded());
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

export const getCollaborators = (projectId) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoadingStatus(true));
      getContributors(projectId)
        .then(response => {
          dispatch(setLoadingStatus(false));
          if (response) {
              console.log("-------response-of collaborator----", response);
            dispatch(showCollaborators(response.contributors));
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
  collaboratorAdded
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [ADD_COLLABORATOR]: (state, action) => ({
    ...state,
  }),
  [SHOW_COLLABORATOR]: (state, action) => ({
    ...state,
    contributors: action.payload
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  contributors: []
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
