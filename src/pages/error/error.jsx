import { Link } from "react-router-dom";
import React from "react";

export default class Error extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <section className="errorComponent">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link">
          Retourner sur la page d'accueil
        </Link>
      </section>
    );
  }
}
