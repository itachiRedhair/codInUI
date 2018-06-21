// ------------------------------------
// Constants
// ------------------------------------
export const MODAL_STATE = 'MODAL_STATE';
export const PROJECT_MODAL_STATE = 'PROJECT_MODAL_STATE';
export const CHANGE_PASSWORD_MODAL_STATE = 'CHANGE_PASSWORD_MODAL_STATE';


// ------------------------------------
// Action Creators
// ------------------------------------

export const setModalState = showModal => ({
  type: MODAL_STATE,
  showModal,
});

export const setProjectModalState = (showProjectModal) => ({
  type: PROJECT_MODAL_STATE,
  showProjectModal
});

export const setChangePasswordModalState = (showChangePasswordModal) => ({
  type: CHANGE_PASSWORD_MODAL_STATE,
  showChangePasswordModal
});
// ------------------------------------
// Actions
// ------------------------------------

const ACTION_HANDLERS = {
  [MODAL_STATE]: (state, action) => ({
    ...state,
    showModal: action.showModal,
  }),
  [PROJECT_MODAL_STATE]: (state, action) => ({
    ...state,
    showProjectModal: action.showProjectModal
  }),
  [CHANGE_PASSWORD_MODAL_STATE]: (state, action) => ({
    ...state,
    showChangePasswordModal: action.showChangePasswordModal
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = {
  showModal: false,
  showProjectModal: false,
  showChangePasswordModal: false,
  projectTypes: [
    {
      id: 1,
      name: 'Angular'
    },
    {
      id: 2,
      name: 'React'
    }
  ]
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
