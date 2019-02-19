// Ducks for user entity

// Actions
const UPDATE = 'USER_UPDATE_ACTION';
const LOGOUT = 'USER_LOGOUT_ACTION';

// Initial state
const userInitialState = {
  isLoggedIn: false,
  username: '',
  email: '',
  gender: '',
  // Job search parameters
  fullTime: false,
  description: '',
  location: '',
  jobs: [],
}

// Reducer
export default ((state = userInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE:
      return Object.assign({}, state, { ...payload });
    case LOGOUT:
      return Object.assign({}, state, { isLoggedIn: false });
    default: return state;
  }
});

// Action Creators
export const update = ((user) => {
  const payload = { isLoggedIn: true, ...user };
  return { type: UPDATE, payload };
})

export const logout = (() => {
  return { type: LOGOUT };
});
