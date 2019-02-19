import { combineReducers } from 'redux';
import userReducer from './user';
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({
  user: userReducer,
});

// Root reducer will also remove browser cache in logout
const rootReducer = (state, action) => {

  if (action.type === 'USER_LOGOUT_ACTION') {
    // Remove store in local storage
    storage.removeItem('persist:root');
    // Reset store
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
