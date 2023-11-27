import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Reset } from 'styled-reset';

import App from './App.jsx';
import './assets/scss/style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Reset />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
);
