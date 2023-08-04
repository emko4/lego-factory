import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LegoFactory } from './LegoFactory';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LegoFactory />
  </React.StrictMode>
);