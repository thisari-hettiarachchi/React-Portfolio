import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import ParticlesBackground from "../Background/ParticlesBackground";
import "../Home/Home.css";
import heroImage from '../../assets/HERO.png';



const Home = () => {
  return (
    <div className="home" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <ParticlesBackground />

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
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="linkedin"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="github"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="twitter"
              >
                <FaTwitter size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="instagram"
              >
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/your-profile"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="facebook"
              >
                <FaFacebook size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img draggable="false" className="tilt" src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
