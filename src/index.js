import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 새로운 createRoot API 사용
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
