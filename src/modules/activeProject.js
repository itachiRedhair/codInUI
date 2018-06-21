import { sumBy } from 'lodash';

// constants imports
import constants from './../constants';
import { showToast } from './toaster';
import { setLoadingStatus } from './loader.js';

// API imports
import { getProjectInfo, getReport, getReportDetails, getRecentSubmits, getCoverage, getCoverageOT } from './../utilities/api';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_PROJECT_INFO = 'SET_PROJECT_INFO';
export const SET_FETCHING_STATUS = 'SET_FETCHING_STATUS';
export const SET_SUBMITTED_AT = 'SET_SUBMITTED_AT';

const { TYPE_ERROR } = constants.toaster;

// ------------------------------------
// Action Creators
// ------------------------------------

const setProjectInfo = (projectInfo) => ({
  type: SET_PROJECT_INFO,
  payload: projectInfo,
});

const setFetchingStatus = (isFetching) => ({
  type: SET_FETCHING_STATUS,
  payload: isFetching,
});

export const setSubmittedAt = (submittedAt) => ({
  type: SET_SUBMITTED_AT,
  payload: submittedAt
});

// ------------------------------------
// Thunk Action Creators
// ------------------------------------

export const fetchProjectInfo = (projectId, duration = 'all') => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setLoadingStatus(true));
    dispatch(setFetchingStatus(true));
    Promise.all([
      getProjectInfo(projectId),
      getReport(projectId, duration),
      getReportDetails(projectId),
      getRecentSubmits(projectId),
      getCoverage(projectId),
      getCoverageOT(projectId)
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((values) => {
        dispatch(setLoadingStatus(false));
        dispatch(setProjectInfo(values));
      })
      .catch((err) => {
        dispatch(setLoadingStatus(false));
        dispatch(setFetchingStatus(false));
        console.error('Failed to get project information', err);
        showToast({ type: TYPE_ERROR, msg: 'Failed to get project information' });
        reject(err);
      });
  });
};

const sortReportDetails = (reports) => {
  let totalErrorsAndWarnings = 0;
  const comparator = (x) => x.count;

  const sorted = reports.sort((aReport, anotherReport) => {
    const aReportTotalSum = sumBy(aReport.output, comparator);
    const anotherReportTotalSum = sumBy(anotherReport.output, comparator);
    return aReportTotalSum > anotherReportTotalSum ? -1 : 1;
  });

  reports.map((aReport) => {
    const aReportTotalSum = sumBy(aReport.output, comparator);
    totalErrorsAndWarnings += aReportTotalSum;
    return true;
  });
  const averagedErrorsAndWarnings = totalErrorsAndWarnings / reports.length;

  return sorted.filter((aReport) => {
    const totalSum = sumBy(aReport.output, comparator);
    return totalSum >= averagedErrorsAndWarnings;
  });
};

const ACTION_HANDLERS = {
  [SET_PROJECT_INFO]: (state, action) => {
    const projectInfo = action.payload[0];
    const reports = action.payload[1];
    const reportDetails = sortReportDetails(action.payload[2]);
    const submissions = action.payload[3];
    const coverage = action.payload[4];
    const coverageOT = action.payload[5];

    return {
      ...state,
      projectId: projectInfo._id,
      projectName: projectInfo.name,
      projectType: projectInfo.type,
      createdBy: projectInfo.created_by,
      createdAt: projectInfo.meta.created_at,
      contributors: [...projectInfo.contributors],
      reportList: [...reports],
      reportListDetails: [...reportDetails],
      submitList: [...submissions],
      coverageList: [...coverage],
      coverageOTList:[...coverageOT],
      isFetching: false,
    };
  },
  [SET_FETCHING_STATUS]: (state, action) => {
    return {
      ...state,
      isFetching: action.payload,
    };
  },
  [SET_SUBMITTED_AT]: (state, action) => ({
    ...state,
    submittedAt: action.payload
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  projectId: '',
  projectName: '',
  projectType: '',
  createdBy: '',
  createdAt: 0,
  reportList: [],
  reportListDetails: [],
  submitList: [],
  contributors: [],
  coverageList: [],
  coverageOTList: [],
  isFetching: false,
  submittedAt: ''
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
