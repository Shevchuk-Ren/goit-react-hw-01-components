import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import { theme } from './constants/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
