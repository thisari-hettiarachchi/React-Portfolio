import React from "react";
import "../Footer/Footer.css";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <img src={Logo} alt="Thisari logo" className="logo-img" />
          <h4>Thisari Hettiarachchi</h4>
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
          <p>
            <a href="tel:+94704009616" >
              <i className='bx bxs-phone'></i> +94704009616
            </a>
          </p>
          <p>
            <a href="mailto:msthisari@gmail.com" >
              <i className='bx bxl-gmail'></i> msthisari@gmail.com
            </a>
          </p>

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
             <a
                href="https://wa.me/+94704009616?text=Hi%20Thisari!%20I%20saw%20your%20portfolio."
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-whatsapp'></i>
              </a>
            <a
                href="https://www.behance.net/thisarihettiar"
                aria-label="Behance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className='bx bxl-behance'></i>
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
