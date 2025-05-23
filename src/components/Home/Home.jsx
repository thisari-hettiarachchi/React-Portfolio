import React from "react";
import ParticlesBackground from "../Background/ParticlesBackground";
import TypingText from "../Type/TypingText";
import heroImage from "../../assets/HERO.png";
import "../Home/Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <ParticlesBackground />

      <div className="content">
        <h2>
          Hello, I'm <br /><span>Thisari</span> Hettiarachchi
        </h2>
        <p>I am a <TypingText /></p>

        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="bx bxs-down-arrow-circle"></i>
        </a>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/thisari-hettiarachchi-40a431228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
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
                href="https://www.facebook.com/profile.php?id=100080510025705"
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
        <img src={heroImage} alt="Hero" className="tilt" draggable="false" />
      </div>
    </section>
  );
};

export default Home;
