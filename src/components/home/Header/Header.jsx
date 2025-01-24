import React from "react";
import logo from "../../../assets/images/logo.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <p className="headerDescription">Descriptive Headline</p>
    </div>
  );
}
