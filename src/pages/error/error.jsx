import { Link } from "react-router-dom";
import React from "react";

export default class Error extends React.Component {
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
