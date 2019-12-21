import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';

import { searchRobots, requestRobots } from './redux/reducers';

import './index.css';
import 'tachyons';

import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({ searchRobots, requestRobots });
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
