import React from "react";
import "../About/About.css";
import profilePic from "../../assets/Profile pic.png";
import resume from "../../assets/Thisari Hettiarachchi CV.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="bx bxs-user"></i> About <span>Me</span>
      </h2>

      <div className="about-container">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src={profilePic}
            alt="Profile"
          />
        </div>

        <div className="content">
          <h2>I'm Thisari Hettiarachchi</h2>
          <span className="tag">Full Stack Developer</span>

          <p>
            I'm a second-year Software Engineering undergraduate at CINEC Campus. With a strong foundation in information and communication technology, I have experience in web and mobile app development, complemented by my passion for creating innovative and user-friendly solutions. I'm dedicated to continuous learning and always eager to take on new challenges in the tech field.
          </p>

          <div className="box-container">
            <div className="box">
              <p><span>Email :</span> msthisari@gmail.com</p>
              <p><span>Mobile :</span> +94704009616</p>
            </div>
          </div>

          <div className="resumebtn">
            <a href={resume} className="btn" download>
              <span>
                <i className="bx bxs-download"></i> Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
