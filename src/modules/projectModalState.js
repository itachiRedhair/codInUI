// ------------------------------------
// Constants
// ------------------------------------
export const MODAL_STATE = "MODAL_STATE";

// ------------------------------------
// Action Creators
// ------------------------------------

export const setProjectModalState = showProjectModal => ({
  type: MODAL_STATE,
  showProjectModal
});

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [MODAL_STATE]: (state, action) => ({
    ...state,
    showProjectModal: action.showProjectModal
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  showProjectModal: false
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
