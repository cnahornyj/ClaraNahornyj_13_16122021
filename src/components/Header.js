import React, { Component } from "react";
import logo from "../assets/argentBankLogo.png";
import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Logo de ArgentBank" />
      </header>
    );
  }
}

export default Header;
