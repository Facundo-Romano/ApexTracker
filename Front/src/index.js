import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import axios from "axios";
import AuthProvider from "./contexts/authProvider.js";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("jwtToken");
axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root')
);