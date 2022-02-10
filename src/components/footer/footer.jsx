import React, { Component } from "react";
import logoWhite from "../../assets/logo_white.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footerComponent">
        <img src={logoWhite} alt="logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}
