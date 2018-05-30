// ------------------------------------
// Constants
// ------------------------------------
export const MODAL_STATE = 'MODAL_STATE';

// ------------------------------------
// Action Creators
// ------------------------------------

export const setModalState = showModal => ({
  type: MODAL_STATE,
  showModal,
});

// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [MODAL_STATE]: (state, action) => ({
    ...state,
    showModal: action.showModal,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  showModal: false,
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
