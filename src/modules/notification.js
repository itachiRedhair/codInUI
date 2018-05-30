// Imports
import { getUnseenNotifications } from '../utilities/api';
// --------------------
// Constants
// --------------------

export const UNSEEN_NOTIFICATION = 'UNSEEN_NOTIFICATION';
export const UNSEEN_NOTIFICATION_ID = 'UNSEEN_NOTIFICATION_ID';

// --------------------
// Action creators
// --------------------

const uNotifications = response => ({
    type: UNSEEN_NOTIFICATION,
    payload: response,
});

const uNotificationsId = response => {
    let nId = [];
    for (let i = 0; i < response.length; i++) {
        nId.push(response[i]._id);
    }
    return {
        type: UNSEEN_NOTIFICATION_ID,
        payload: nId,
    }
}

// --------------------
// Thunk action creator
// --------------------

export const fetchUnseenNotifications = () => (dispatch, getState) =>
    new Promise((resolve, reject) => {
        getUnseenNotifications()
            .then((response) => {
                if (response) {
                    dispatch(uNotifications(response));
                    dispatch(uNotificationsId(response));                    
                    console.log("response", response);
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
    unseenNotifications: [],
    notificationIds: []
};

// ---------------------
// Actions
// ---------------------

const ACTION_HANDLERS = {
    [UNSEEN_NOTIFICATION]: (state, action) => ({
        ...state,
        unseenNotifications: action.payload,
        
    }),
    [UNSEEN_NOTIFICATION_ID]: (state, action) => ({
        ...state,
        notificationIds: action.payload,
    })
};

export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};
