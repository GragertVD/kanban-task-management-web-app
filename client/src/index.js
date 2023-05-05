import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import {ThemeProvider} from 'styled-components';
import { bazeTheme } from './them';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={bazeTheme}>
    <App />
  </ThemeProvider>
);

