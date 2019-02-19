import { createStore } from 'redux';
import { persistReducer } from 'redux-persist'; // To prevent page refresh to clear store
import rootReducer from './ducks';
import storage from 'redux-persist/lib/storage';

// Settings of persistent store
const persistConfig = {
    key: 'root',
    storage, // defaults to browser localstorage
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);

export default store;
