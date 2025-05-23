import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="topnav" id="mySidenav">
        <a href="/" className="logo" target="_blank" rel="noopener noreferrer">
          <img src={Logo} alt="Thisari logo" className="logo-img" />
          <span>Thisari</span>
        </a>

        <div className="navbar">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
