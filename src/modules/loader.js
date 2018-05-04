// ------------------------------------
// Constants
// ------------------------------------
export const LOADER = "LOADER";

// ------------------------------------
// Action Creators
// ------------------------------------

export const setLoadingStatus = isLoading => ({
  type: LOADER,
  isLoading
});

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [LOADER]: (state, action) => ({
    ...state,
    isLoading: action.isLoading
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
