import "./index.css";
import {Route, BrowserRouter as Router,  Switch} from "react-router-dom";
import App from "./App";
// import Erreur from "./pages/error/" //FIXME finir l'import
import Index from "./pages/index/index";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/"><Index /> </Route>
        <Route path="/appartement/:id"><App /> </Route>
        {/* <Route path="*"><Erreur /> </Route> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
