// Imports
import { getTsLintHeatMapData } from "../utilities/api";
// --------------------
// Constants
// --------------------
export const TS_LINT_HEATMAP = 'TS_LINT_HEATMAP';

// --------------------
// Action creators
// --------------------

const dispalyTsLintHeatmap = tsLintHeatmapData => ({
    type: TS_LINT_HEATMAP,
    payload: tsLintHeatmapData
});

// --------------------
// Thunk action creator
// --------------------

export const showTsLintHeatMap = (projectId) => (dispatch, getState) => {
    getTsLintHeatMapData(projectId)
    .then(response => {
        if(response){
            dispatch(dispalyTsLintHeatmap(response));
        }
        else {
            console.log('Response error');
        }
    })
    .catch(err => {
        console.log('TsLint heatmap error', err);
    })
}

const initialState = {
    tsLintHeatmapData: []
}

// ---------------------
// Actions
// ---------------------

const ACTION_HANDLERS = {
    [TS_LINT_HEATMAP]: (state, action) => ({
        ...state,
        tsLintHeatmapData: [...action.payload]
    })
}

export default(state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action)
                    : state

}
