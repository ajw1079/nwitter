import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';  //지울 것
import App from './App';
//import reportWebVitals from './reportWebVitals';  //지울 것
import firebase from "./firebase.js";
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();  //지울 것
