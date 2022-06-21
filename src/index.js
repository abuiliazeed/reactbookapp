import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  // Add BrowserRouter to wrap the entire app in order to navigate between app and search page
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
