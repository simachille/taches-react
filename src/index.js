import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import appReducers from "./reducers";

// STORE -- STATE GLOBAL; exple: countrer = 0

// ACTION -- WHAT TO DO; INCREMENT
// ACTION: Fonction qui retourne un objet

// REDUCER: Describes how action transforms state into the next one, Check the action maded and based on that it is going to modifty the state

// DISPATCHER: SENDS ACTION TO THE REDUCER
// DISPATCHER envoit l'ACTION au REDUCER, le REDUCER met à jour le STORE

// Création du store
const store = createStore(appReducers);

// Ajout du provider
// Le provider fait le lien(connecte) entre le store et l'appication
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
