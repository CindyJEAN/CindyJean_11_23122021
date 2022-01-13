import React from "react";
import logoWhite from "../../assets/logo_white.svg";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <footer className="footerComponent">
        <img src={logoWhite} />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}
