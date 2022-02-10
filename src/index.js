import "./index.scss";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import About from "./pages/about/about";
import AccommodationSheet from "./pages/accommodationSheet/accommodationSheet";
import Error from "./pages/error/error";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/accommodation/:id"
          render={(props) => <AccommodationSheet {...props} />}
        />
        <Route path="/404">
          <Error />
        </Route>
        <Redirect from="*" to="/404"/>
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
