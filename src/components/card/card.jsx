import { Link } from "react-router-dom";
import React from "react";

export default class Card extends React.Component {
  id;
  image;
  title;

  /**
   * @param {Object} props
   * @param {String} props.id
   * @param {String} props.image
   * @param {String} props.title
   */
  constructor(props) {
    super(props);

    this.id = props.id;
    this.image = props.image;
    this.title = props.title;
  }

  render() {
    return (
      <Link to={`/accommodation/${this.id}`} className="cardComponent">
        <article style={{ backgroundImage: `url(${this.image})` }}>
          <h2>{this.title}</h2>
        </article>
      </Link>
    );
  }
}
