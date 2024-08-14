import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router
      basename={
        window.location.pathname.includes("/syn2sign/demo/")
          ? "/syn2sign/demo/"
          : "/"
      }
    >
      <App />
    </Router>
  </React.StrictMode>
);
