import React, { Component } from "react";
import arrow from "../../assets/icon_arrow.svg";

export default class Dropdown extends Component {
  label;
  content;

  /**
   * @param {Object} props
   * @param {String} props.label
   * @param {Array.<String>} props.content
   */
  constructor(props) {
    super(props);

    this.label = props.label;
    this.content = props.content;

    this.state = {
      isOpen: false,
    };
  }

  /**
   * takes the state of the dropdown (isOpen true or false) and reverses it
   * @returns {Void} update state
   */
  handleDropdownClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div
        className={`dropdownComponent ${
          this.state.isOpen ? "dropdownOpen" : "dropdownClosed"
        }`}
      >
        <button onClick={() => this.handleDropdownClick()}>
          {this.label}
          <img src={arrow} alt="" />
        </button>
        <div>
          {this.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }
}
