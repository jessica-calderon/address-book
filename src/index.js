import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1 m-2 p-1">React Telephone Directory</span>
</nav>
    <App />
    <footer id="footer" class="p-2 text-center text-lg-start bg-light text-muted text-center">
      <div class="row">
      <span class="m-2 p-1 text-center">Created by <a href="https://github.com/jessica-calderon" target="_blank">Jessica Calderon</a> © 2022</span></div>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
