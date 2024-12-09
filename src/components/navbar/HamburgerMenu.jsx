import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`HamburgerMenu-container ${isOpen ? "HamburgerMenu-change" : ""}`}
        onClick={toggleMenu}
      >
        <div className="HamburgerMenu-bar1"></div>
        <div className="HamburgerMenu-bar2"></div>
        <div className="HamburgerMenu-bar3"></div>
      </div>

      {isOpen && (
        <div className="HamburgerMenu-card">
          <button className="HamburgerMenu-close" onClick={toggleMenu}>
            &times;
          </button>
          <div className="HamburgerMenu-aParent">
            <a href="#Hero" onClick={toggleMenu}>About Me</a>
            <a href="#skills-gallary" onClick={toggleMenu}>Skills</a>
            <a href="#Projects" onClick={toggleMenu}>Projects</a>
            <a href="#contacts" onClick={toggleMenu}>Contacts</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;

