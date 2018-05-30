// Imports
import { getReport, getReportDetails } from '../utilities/api';
// --------------------
// Constants
// --------------------

export const TS_LINT_REPORT = 'TS_LINT_REPORT';
export const TS_LINT_REPORT_DETAILS = 'TS_LINT_REPORT_DETAILS';
export const FETCHING = 'FETCHING';

// --------------------
// Action creators
// --------------------

const showReport = reportResponse => ({
  type: TS_LINT_REPORT,
  payload: reportResponse,
});

const showReportDetails = reportDetails => ({
  type: TS_LINT_REPORT_DETAILS,
  payload: reportDetails,
});

const fetchingReport = isFetchType => ({
  type: FETCHING,
  payload: isFetchType,
});

// --------------------
// Thunk action creator
// --------------------

export const listTslintReport = (projectId, duration) => (dispatch, getState) => {
  dispatch(fetchingReport(true));

  return new Promise((resolve, reject) => {
    getReport(projectId, duration)
      .then((response) => {
        if (response) {
          dispatch(showReport(response));
          resolve(response);
        } else {
          dispatch(fetchingReport(false));
          console.log('Response error');
        }
      })
      .catch((err) => {
        dispatch(fetchingReport(false));
        console.log('Report view error', err);
      });
  });
};

export const listTslintReportDetails = (projectId, duration) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    getReportDetails(projectId, duration)
      .then((response) => {
        if (response) {
          dispatch(showReportDetails(response));
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
  reportList: [],
  reportListDetails: [],
  isFetching: false,
};

// ---------------------
// Actions
// ---------------------

const ACTION_HANDLERS = {
  [TS_LINT_REPORT]: (state, action) => ({
    ...state,
    isFetching: false,
    reportList: [...action.payload],
  }),
  [TS_LINT_REPORT_DETAILS]: (state, action) => ({
    ...state,
    isFetching: false,
    reportListDetails: action.payload,
  }),
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: action.payload,
  }),
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
