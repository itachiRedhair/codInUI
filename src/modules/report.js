// Imports
import { getReport } from "../utilities/api";
// --------------------
// Constants
// --------------------
export const TS_LINT_REPORT = "TS_LINT_REPORT";

// --------------------
// Action creators
// --------------------

const showReport = reportResponse => ({
  type: TS_LINT_REPORT,
  payload: reportResponse
});

// --------------------
// Thunk action creator
// --------------------

export const listTslintReport = (projectId, duration) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    getReport(projectId, duration)
      .then(response => {
        console.log("---response--",response);
        if (response) {
          dispatch(showReport(response));
          resolve(response);
        } else {
          console.log("Response error");
        }
      })
      .catch(err => {
        console.log("Report view error", err);
      });
  });

const initialState = {
  reportList: []
};

// ---------------------
// Actions
// ---------------------

const ACTION_HANDLERS = {
  [TS_LINT_REPORT]: (state, action) => ({
    ...state,
    reportList: [...action.payload]
  })
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
