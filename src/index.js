import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp( {
apiKey: process.env.REACT_APP_apiKey,
authDomain: process.env.REACT_APP_authDomain,
databaseURL: process.env.REACT_APP_databaseURL,
projectId: process.env.REACT_APP_projectId,
storageBucket: process.env.REACT_APP_storageBucket,
messagingSenderId: process.env.REACT_APP_messagingSenderId,
appId: process.env.REACT_APP_appId,
});

const analytics = getAnalytics(firebaseApp);
const firestore = getFirestore()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
