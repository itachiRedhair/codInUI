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
export const INVITE_RESPOND = "INVITE_RESPOND";

// ------------------------------------
// Action Creators
// ------------------------------------

const invitationSend = invitationResponse => ({
  type: SEND_INVITATION,
  payload: invitationResponse
});

const respondInvitationResponse = invresponse => ({
    type: INVITE_RESPOND,
    // payload: invresponse
  });

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const sendInvitation = ( params ) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    inviteContributor( params )
      .then(response => {
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

export const respondInvitation = (accepted, projectId) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(setLoadingStatus(true));
      respondInvite(accepted, projectId)
        .then(response => {
          dispatch(setLoadingStatus(false));
          if (response) {
            dispatch(respondInvitationResponse());
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
  [INVITE_RESPOND]: (state, action) => ({
    ...state
    // invresponse: action.payload
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
