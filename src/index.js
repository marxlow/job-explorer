import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'; // To prevent page refresh to clear store
import { PersistGate } from 'redux-persist/integration/react';

import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store';
import './index.css';

// Merge store and persistent settings. Store holds entire application state
// Updates local storage at every change in store
const persistor = persistStore(store); 

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
