import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter  } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_APP==='demo' ? '/syn2sign/demo' : import.meta.env.VITE_APP === 'production' ? '/syn2sign' : '/' }> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
