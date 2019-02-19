// Ducks for user entity

// Actions
const UPDATE = 'USER_UPDATE_ACTION';

// Initial state
const userInitialState = {
  isLoggedIn: false,
  username: '',
  email: '',
  gender: '',
}

// Reducer
export default ((state = userInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE:
      return Object.assign({}, state, { ...payload });
    default: return state;
  }
});

// Action Creators
export const update = ((user) => {
  const payload = { isLoggedIn: true, ...user };
  return { type: UPDATE, payload };
})