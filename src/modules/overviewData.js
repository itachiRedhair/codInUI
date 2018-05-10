//Action Creator Imports
import {getOverviewData} from '../utilities/api';

// ------------------------------------ Constants
// ------------------------------------ TO Discuss - whey we have to export
// these constants
export const OVERVIEW_DATA = 'OVERVIEW_DATA';

// ------------------------------------ Action Creators
// ------------------------------------
const displayOverviewData = overviewData => ({type: OVERVIEW_DATA, payload: overviewData});

// ------------------------------------ Thunk Action Creators
// ------------------------------------

export const showOverviewData = (projectId) => (dispatch, getState) => {
    getOverviewData(projectId).then(response => {
        if (response) {
            dispatch(displayOverviewData(response.overviewData));
        } else {}
    }).catch(err => {
        console.log(err);
    });
}

const initialState = {
    overviewData: []
}

// ------------------------------------ Actions
// ------------------------------------

const ACTION_HANDLERS = {
    [OVERVIEW_DATA]: (state, action) => ({
        ...state,
        overviewData: [...action.payload]
    })
}

export default(state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler
        ? handler(state, action)
        : state;
}