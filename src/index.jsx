import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import Routes from './main/routes';
import App from './main/app';
import Reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(Reducers, devTools);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'));

  WebFont.load({
    google: {
      families: ['Titillium Web:300,400,700', 'sans-serif']
    }
  });