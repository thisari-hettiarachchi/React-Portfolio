import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="topnav" id="mySidenav">
        <a href="/" className="logo"  rel="noopener noreferrer">
          <img src={Logo} alt="Thisari logo" className="logo-img" />
          <span>Thisari</span>
        </a>

        <div className="navbar">
          <ul>
            <li><a className={activeSection === "home" ? "active" : ""} href="#home">Home</a></li>
            <li><a className={activeSection === "about" ? "active" : ""} href="#about">About</a></li>
            <li><a className={activeSection === "skills" ? "active" : ""} href="#skills">Skills</a></li>
            <li><a className={activeSection === "projects" ? "active" : ""} href="#projects">Projects</a></li>
            <li><a className={activeSection === "contact" ? "active" : ""} href="#contact">Contact Me</a></li>
          </ul>
        </div>

        
      </nav>
    </header>
  );
};

export default Navbar;
