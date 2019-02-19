import store from '../store';

const isLoggedIn = (() => {
  // Read from redux store
  const storeState = store.getState();
  return storeState.user.isLoggedIn;
});

export default isLoggedIn;