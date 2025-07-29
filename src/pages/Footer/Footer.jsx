import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">

        <div className="box">
          <h3>Thisari's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with me over socials.
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home"><i className='bx bxs-right-arrow-circle'></i> home</a>
          <a href="#about"><i className='bx bxs-right-arrow-circle'></i> about</a>
          <a href="#skills"><i className='bx bxs-right-arrow-circle'></i> skills</a>
          <a href="#projects"><i className='bx bxs-right-arrow-circle'></i> projects</a>
          <a href="#contact"><i className='bx bxs-right-arrow-circle'></i> contact</a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <p><i className='bx bxs-phone'></i> +94704009616</p>
          <p><i className='bx bxl-gmail'></i> msthisari@gmail.com</p>
          <div className="share">
            <a
              href="https://www.linkedin.com/in/thisari-hettiarachchi-40a431228"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className='bx bxl-linkedin'></i>
            </a>
            <a
              href="https://github.com/thisari-hettiarachchi"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className='bx bxl-github'></i>
            </a>
            <a
              href="mailto:msthisari@gmail.com"
              aria-label="Mail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className='bx bxl-gmail'></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p className="copyright">&copy; 2025. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
