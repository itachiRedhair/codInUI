// constants imports
import constants from "./../constants";
import config from "./../../config";
import { showToast } from './toaster';
import { showProject } from './project';
import { recentList } from './recent';
import { fetchAllNotifications } from './notification';


// Action Creator Imports
import { setLoadingStatus } from "./loader.js";

// API imports
import { inviteContributor, respondInvite } from "./../utilities/api";

// ------------------------------------
// Constants
// ------------------------------------
export const SEND_INVITATION = "SEND_INVITATION";
export const INVITE_RESPOND = "INVITE_RESPOND";
const { TYPE_SUCCESS, TYPE_WARN, TYPE_ERROR } = constants.toaster;

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

export const sendInvitation = (params) => (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    inviteContributor(params)
      .then(response => {
        dispatch(setLoadingStatus(false));
        dispatch(invitationSend(response));
        dispatch(showToast({ type: TYPE_SUCCESS, msg: 'Invitation sent' }));
        resolve(response);
      })
      .catch(err => {
        dispatch(setLoadingStatus(false));
        dispatch(showToast({ type: TYPE_ERROR, msg: err.message }));
        reject(err.message);

      });
  });

export const respondInvitation = (accepted, projectId) => (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    respondInvite(accepted, projectId)
      .then(response => {
        dispatch(setLoadingStatus(false));
        dispatch(respondInvitationResponse());
        if (accepted === true) {
          dispatch(showToast({ type: TYPE_SUCCESS, msg: 'Invitation Accepted Successfully' }));
          dispatch(fetchAllNotifications());
          dispatch(showProject());
          dispatch(recentList());
        }
        else {
          dispatch(showToast({ type: TYPE_SUCCESS, msg: 'Invitation Declined' }));
          dispatch(fetchAllNotifications());
        }
        resolve(response);
      })
      .catch(err => {
        dispatch(setLoadingStatus(false));
        dispatch(showToast({ type: TYPE_ERROR, msg: err.message }));
        reject(err.message);
      });
  });

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
