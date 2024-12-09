import React from "react";
import "./navbar.css";
import HamburgerMenu from "./HamburgerMenu";


function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>Tarique</h1>
      </div>
    <HamburgerMenu />
    </div>
  );
}

export default Navbar;
