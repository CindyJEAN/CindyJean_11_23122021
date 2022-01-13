import { Link } from "react-router-dom";
import React from "react";

export default class Card extends React.Component {

  id;

  image;

  title;

  constructor(props) {
    super();
    for (const [key, value] of Object.entries(props)){
      this[key] = value;
    }
    //TODO click vers page housing
    // const { title "card"} = this.props;

  }

  render() {
    return (
      <article className="cardComponent" style={{backgroundImage: `url(${this.image})`}}>
        <h2>{this.title}</h2>
      </article>
    );
  }

}
