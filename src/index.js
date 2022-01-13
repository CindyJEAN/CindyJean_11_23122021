import "./index.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./pages/about/about";
import Error from "./pages/error/error";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Housing from "./pages/housing/housing";
import Index from "./pages/index/index";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/appartement/:id">
          <Housing />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
