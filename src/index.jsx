import ReactDom from 'react-dom';

import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

// css
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/css/style.css';
import "./Assets/css/Sidebar.css";
import "./Assets/css/Section.css";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
