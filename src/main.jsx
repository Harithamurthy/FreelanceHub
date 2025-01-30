// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css'; // Global styles

// Main entry point to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the 'root' element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
