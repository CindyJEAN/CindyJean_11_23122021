import React, { Component } from "react";

export default class Tag extends Component {
  text;

  /**
   * @param {Object} props
   * @param {String} props.text
   */
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <span className="tagComponent">{this.text}</span>
    );
  }
}
