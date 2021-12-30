import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Switch, Route} from "react-router-dom";
import Index from "./pages/index/index";
// import Erreur from "./pages/error/" //FIXME finir l'import

ReactDOM.render(
  <React.StrictMode>
    <Switch>
      <Route exact path="/"><Index /> </Route>
      <Route path="/appartement/:id"><App /> </Route>
      {/* <Route path="*"><Erreur /> </Route> */}
    </Switch>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
