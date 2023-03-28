import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Index.css";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
