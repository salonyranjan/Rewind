import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' import
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// 2. Use the React 18 createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);