import React from "react";
import logo from "../../../src/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="brand-logo" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/order">Order review</a>
        <a href="/manage">Manage Inventorry</a>
      </nav>
    </div>
  );
};

export default Header;
