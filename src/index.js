import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import 'normalize.css'; // Normalize CSS - always goes before other CSS
import './styles/main.sass';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
