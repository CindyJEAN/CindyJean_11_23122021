import React from "react";

export default class Tag extends React.Component {
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
