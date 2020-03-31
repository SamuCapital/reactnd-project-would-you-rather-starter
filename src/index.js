import React from 'react';
import ReactDOM from 'react-dom';
import './app/views/app/index.css';
import { Provider } from 'react-redux';
import App from './app/views/app/App';
import Store from './app/state/store';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
