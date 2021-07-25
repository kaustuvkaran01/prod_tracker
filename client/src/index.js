import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { createStore } from "redux";
// import rootReducers from "./store/reducers/index";
// import { Provider } from "react-redux";
// import { store } from "./store/helpers/store";
// import { configureFakeBackend } from "./store/helpers/fake-backend";
// configureFakeBackend();
// import thunk from "redux-thunk";
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase,getFirebase } from 'react-redux-firebase';
// import { BrowserRouter as Router } from 'react-router-dom';
// import firebaseconfig from './config/firebase';

// const store = createStore(
//   rootReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
