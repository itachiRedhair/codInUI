// Imports
// --------------------
// Constants
// --------------------

export const SHOW_TOASTER = 'SHOW_TOASTER';



// --------------------
// Action creators
// --------------------

const showToaster = (toasterConfig) => ({
  type: SHOW_TOASTER,
  payload: toasterConfig
});

export const showToast = (toasterConfig) => (dispatch) => {
  dispatch(showToaster(toasterConfig));
}



const initialState = {
  // toasterConfig:
};

// ---------------------
// Actions
// ---------------------

const ACTION_HANDLERS = {
  [SHOW_TOASTER]: (state, { payload }) => ({
    ...state,
    toasterConfig: payload
  }),
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
