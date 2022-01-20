import React, { Component } from "react";
// import { Link } from "react-router-dom";

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
    // console.log(props);
    for (const [key, value] of Object.entries(props)){
      this[key] = value;
    }
    //TODO click vers page housing
  }

  render() {
    return (
      <article
        className="cardComponent"
        style={{ backgroundImage: `url(${this.image})` }}
      >
        <h2>{this.title}</h2>
      </article>
    );
  }
}
