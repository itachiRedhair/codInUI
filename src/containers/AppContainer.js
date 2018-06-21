import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './../store';

import App from '../pages';
import '../styles/core.scss';

/* eslint-disable react/jsx-filename-extension */
const AppContainer = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
/* eslint-enable react/jsx-filename-extension */

export default AppContainer;
