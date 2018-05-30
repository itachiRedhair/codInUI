import { getOverviewHeatMapData } from '../utilities/api';

// ------------------------
// Constants
// ------------------------

export const OVERVIEW_HEAT_MAP = 'OVERVIEW_HEAT_MAP';

// -------------------------
// Action creators
// -------------------------

const displayOverviewHeatMap = overviewHeatMapData => ({
  type: OVERVIEW_HEAT_MAP,
  payload: overviewHeatMapData,
});

// --------------------------
// Thunk action creators
// --------------------------

export const showOverViewHeatMap = projectId => (dispatch, getState) => {
  getOverviewHeatMapData(projectId)
    .then((response) => {
      if (response) {
        dispatch(displayOverviewHeatMap(response));
      } else {
        console.log('Response error');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const initialState = {
  overviewHeatMapData: [],
};

// -------------------------
// Actions
// -------------------------
const ACTION_HANDLERS = {
  [OVERVIEW_HEAT_MAP]: (state, action) => ({
    ...state,
    overviewHeatMapData: [...action.payload],
  }),
};

export default(state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action)
    : state;
};
