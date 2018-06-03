// Imports
import { getReport, getReportDetails } from '../utilities/api';
import { setLoadingStatus } from './loader.js';
import { showToast } from './toaster';
import constants from "./../constants";


// --------------------
// Constants
// --------------------

export const TS_LINT_REPORT = 'TS_LINT_REPORT';
export const TS_LINT_REPORT_DETAILS = 'TS_LINT_REPORT_DETAILS';
const { TYPE_SUCCESS, TYPE_WARN, TYPE_ERROR } = constants.toaster;

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

const _listTslintReport = (projectId, duration) => (dispatch, getState) => {
  dispatch(setLoadingStatus(true));

  return new Promise((resolve, reject) => {
    getReport(projectId, duration)
      .then((response) => {
        if (response) {

          dispatch(showReport({ reports: response, projectId }));
          dispatch(setLoadingStatus(false));
          resolve(response);
        }
      })
      .catch((err) => {
        console.log('Report view error', err);
        dispatch(setLoadingStatus(false));
        dispatch(showToast({ type: TYPE_ERROR, msg: 'Failed to fetch reports' }));
      });
  });
}

const shouldFetchLintReport = (state, projectId) => {
  const project = state.reportReducer[projectId]
  return project ? (project.reportList.length === 0) : true;
}

export const listTslintReport = (projectId, duration) => (dispatch, getState) => {
  if (shouldFetchLintReport(getState(), projectId)) return dispatch(_listTslintReport(projectId, duration));
};

export const listTslintReportDetails = (projectId, duration) => (dispatch, getState) => (
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
  })
);


const initialState = {
  reportList: [],
  reportListDetails: [],
  isFetching: false,
};

// ---------------------
// Actions
// ---------------------

const ACTION_HANDLERS = {
  [TS_LINT_REPORT]: (state, action) => {
    const { projectId, reports } = action.payload;
    return {
      ...state,
      isFetching: false,
      [projectId]: {
        reportList: [...reports],
      }
    }
  },
  [TS_LINT_REPORT_DETAILS]: (state, action) => ({
    ...state,
    isFetching: false,
    reportListDetails: action.payload,
  })
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
