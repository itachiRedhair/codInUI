// Imports
import { getRecentActivities } from '../utilities/api';
// --------------------
// Constants
// --------------------

export const RECENT_DATA = 'RECENT_DATA';

// --------------------
// Action creators
// --------------------

const recent = recentResponse => ({
  type: RECENT_DATA,
  payload: recentResponse,
});

// --------------------
// Thunk action creator
// --------------------

export const recentList = () => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    getRecentActivities()
      .then((response) => {
        if (response) {
          dispatch(recent(response));
          resolve(response);
        } else {
          console.log('Response error');
        }
      })
      .catch((err) => {
        console.log('Report view error', err);
      });
  });


const initialState = {
  recentData: [],
};

// ---------------------
// Actions
// ---------------------

const ACTION_HANDLERS = {
  [RECENT_DATA]: (state, action) => ({
    ...state,
    recentData: [...action.payload],
  }),
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
