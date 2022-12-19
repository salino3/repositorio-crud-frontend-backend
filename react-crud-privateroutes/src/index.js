import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import MyProvider from './context/MyProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <MyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </MyProvider>
  </React.StrictMode>
);


