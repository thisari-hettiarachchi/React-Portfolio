import React from "react";
import "./Home.css";
import HeroImage from "../../assets/HERO.png";
import "boxicons/css/boxicons.min.css"; // Make sure boxicons is installed via npm or included in your index.html

const Home = () => {
  return (
    <section className="home" id="home">
      <div id="particles-js"></div>

      <div className="content">
        <h2>
          Hello, I'm <br />
          <span>Thisari</span> Hettiarachchi
        </h2>
        <p>
          I am a <span className="typing-text"></span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="bx bxs-down-arrow-circle"></i>
        </a>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/thisari-hettiarachchi-40a431228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/thisari-hettiarachchi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li>
              <a
                className="twitter"
                aria-label="Twitter"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/profile.php?id=100080510025705&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          className="tilt"
          src={HeroImage}
          alt="Hero Thisari"
        />
      </div>
    </section>
  );
};

export default Home;
