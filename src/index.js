// react imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

// bootstrap imports
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

// fa imports
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// custom imports
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);