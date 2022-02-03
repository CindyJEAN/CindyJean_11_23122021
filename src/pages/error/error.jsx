import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Error extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <main className="errorPage">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link">
          Retourner sur la page d'accueil
        </Link>
      </main>
    );
  }
}
