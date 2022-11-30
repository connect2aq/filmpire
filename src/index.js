import React from 'react';
import ReactDom from 'react-dom';
import { BowserRouter, BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

