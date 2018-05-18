// Imports
import { getReport, getReportDetails } from "../utilities/api";
// --------------------
// Constants
// --------------------

export const TS_LINT_REPORT = "TS_LINT_REPORT";
export const TS_LINT_REPORT_DETAILS = "TS_LINT_REPORT_DETAILS";

// --------------------
// Action creators
// --------------------

const showReport = reportResponse => ({
  type: TS_LINT_REPORT,
  payload: reportResponse
});
const showReportDetails = reportDetails => ({
  type: TS_LINT_REPORT_DETAILS,
  payload: reportDetails
});

// --------------------
// Thunk action creator
// --------------------

export const listTslintReport = (projectId, duration) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    getReport(projectId, duration)
      .then(response => {
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

  export const listTslintReportDetails = (projectId, duration) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    getReportDetails(projectId, duration)
      .then(response => {
        console.log("---response-of-report details---",response);
        if (response) {
          dispatch(showReportDetails(response));
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
  reportList: [],
  reportListDetails: []
};

// ---------------------
// Actions
// ---------------------

const ACTION_HANDLERS = {
  [TS_LINT_REPORT]: (state, action) => ({
    ...state,
    reportList: [...action.payload]
  }),
  [TS_LINT_REPORT_DETAILS]: (state, action) => ({
    ...state,
    reportListDetails: [...action.payload]
  })
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
