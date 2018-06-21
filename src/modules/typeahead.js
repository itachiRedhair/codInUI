// constants imports
import constants from "./../constants";
import config from "./../../config";

// Action Creator Imports
import { setLoadingStatus } from "./loader.js";

// API imports
import { getUserSuggestions } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const GET_SUGGESTIONS = "GET_SUGGESTIONS";

// ------------------------------------
// Action Creators
// ------------------------------------

const typeahead = names => ({
  type: GET_SUGGESTIONS,
  payload: names
});

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const userSuggestions = name => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));

    getUserSuggestions({ name })
      .then(response => {
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(typeahead(response.suggestions));
          resolve(response.suggestions);
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

export const actions = {
  typeahead
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [GET_SUGGESTIONS]: (state, action) => ({
    ...state,
    names: [...action.payload]
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  names: []
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
