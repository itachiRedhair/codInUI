// Action Creator Imports
import { setLoadingStatus } from './loader.js';

// API imports
import { addCollaborator } from './../utilities/api';

// ------------------------------------
// Constants
// ------------------------------------

export const ADD_COLLABORATOR = 'ADD_COLLABORATOR';

// ------------------------------------
// Action Creators
// ------------------------------------

const collaboratorAdded = (names) => ({
  type: ADD_COLLABORATOR,
  payload: names,
});

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const registerCollaborator = (params) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    addCollaborator(params)
      .then((response) => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(collaboratorAdded());
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((err) => {
        dispatch(setLoadingStatus(false));
        console.log(err);
        resolve(false);
      });
  });

export const actions = {
  collaboratorAdded,
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [ADD_COLLABORATOR]: (state, action) => ({
    ...state,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
