// Basic REDUX store according to https://react-redux.js.org/introduction/basic-tutorial

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
