import React, { Component } from "react";
import { Link } from "react-router-dom";

// interface ClassProps {
//   title: String;
//   image: String;
// }

export default class Card extends Component {
  id;

  image;

  title;

  constructor(props) {
    super(props);
    for (const [key, value] of Object.entries(props)) {
      this[key] = value;
    }
  }

  render() {
    // const { image, title } = this.props;
    return (
      // <Link to={`/accommodation/${this.id}`}>
      <Link to={`/accommodation`}>
        <article
          className="cardComponent"
          style={{ backgroundImage: `url(${this.image})` }}
        >
          <h2>{this.title}</h2>
        </article>
      </Link>
    );
  }
}
