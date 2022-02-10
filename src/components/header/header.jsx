import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_primary.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="headerComponent">
        <nav>
          <Link to="/">
            <img src={logo} alt="logo Kasa" />
          </Link>
          <div>
            <Link to="/" className="navLink">Accueil</Link>
            <Link to="/about" className="navLink">A Propos</Link>
          </div>
        </nav>
      </header>
    );
  }
}
