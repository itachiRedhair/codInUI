//constants imports
import constants from "./../constants";
import config from "./../../config";

//Action Creator Imports
import { setLoadingStatus } from "./loader.js";

//API imports
import { inviteContributor, respondInvite } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const SEND_INVITATION = "SEND_INVITATION";
export const SHOW_COLLABORATOR = "SHOW_COLLABORATOR";
// ------------------------------------
// Action Creators
// ------------------------------------

const invitationSend = invitationResponse => ({
  type: SEND_INVITATION,
  payload: invitationResponse
});

const respondInvitationresponse = invresponse => ({
    type: SHOW_COLLABORATOR,
    payload: invresponse
  });

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const sendInvitation = ( params ) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    inviteContributor( params )
      .then(response => {
          console.log("---userid---", params);
          console.log("---------checking in invitation reducers-------", response);
        dispatch(setLoadingStatus(false));
        if (response) {
          dispatch(invitationSend(response));
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

export const respondInvitation = (projectId, accepted) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoadingStatus(true));
      respondInvite(projectId, accepted)
        .then(response => {
          dispatch(setLoadingStatus(false));
          if (response) {
            dispatch(respondInvitationResponse(response));
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
  invitationSend
};

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [SEND_INVITATION]: (state, action) => ({
    ...state,
  }),
  [SHOW_COLLABORATOR]: (state, action) => ({
    ...state,
    invresponse: action.payload
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  invresponse: []
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
