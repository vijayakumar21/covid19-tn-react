import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeSelect} from './ThemeSelect.js';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <BrowserRouter>
   <ThemeSelect>
    <App />
    </ThemeSelect>
    </BrowserRouter>,
  document.getElementById('root')
);

