import { React , StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
   </StrictMode>
)
