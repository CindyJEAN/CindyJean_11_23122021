import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  id;
  image;
  title;

  /**
   * @param {import("../../typedef").accommodation} props
  //  * @param {Object} props
  //  * @param {String} props.id
   * Comment récupérer les types de props.id, props.title depuis le typedef?
   */
  constructor(props) {
    super(props);
    for (const [key, value] of Object.entries(props)) {
      this[key] = value;
    }
  }

  render() {
    return (
      // <Link to={"/accommodation"} className="cardComponent">
      <Link to={`/accommodation/${this.id}`} className="cardComponent">
        <article style={{ backgroundImage: `url(${this.image})` }}>
          <h2>{this.title}</h2>
        </article>
      </Link>
    );
  }
}
