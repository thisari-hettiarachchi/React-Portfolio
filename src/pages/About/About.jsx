import React, { useEffect, useRef, useState } from "react";
import "../About/About.css";
import profilePic from "../../assets/Profile pic.png";
import resume from "../../assets/Thisari Hettiarachchi CV.pdf";
import TypingText from "../../components/Type/TypingText";

const About = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);
  const journeyRefs = useRef([]);

  const journey = [
    {
      title: "Software Engineering Undergraduate",
      institution: "CINEC Campus",
      description:
        "Pursuing BSc (Hons) in Software Engineering with a focus on web and mobile development.",
      year: "2022 - Present",
    },
    {
      title: "G.C.E. Advanced Level – Physical Science Stream",
      institution: "Ananda Balika Vidyalaya, Colombo 10",
      description: "Studied Combined Mathematics, Physics, and ICT.",
      year: "2019 - 2021",
    },
    {
      title: "G.C.E. Ordinary Level",
      institution: "Ananda Balika Vidyalaya, Colombo 10",
      description: "Completed O/Ls with 9 A passes.",
      year: "2018",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === aboutRef.current) {
            setAboutVisible(true);
          } else {
            const index = journeyRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }
          }
        }
      });
    }, observerOptions);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    journeyRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="bx bxs-user"></i> About <span>Me</span>
      </h2>

      <div 
        ref={aboutRef}
        className={`about-container ${aboutVisible ? 'fade-in-up' : ''}`}
      >
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
          <p>
            <span className="typing-text">
              <TypingText />
            </span>
          </p>
          <p>
            I'm a second-year Software Engineering undergraduate at CINEC
            Campus. With a strong foundation in information and communication
            technology, I have experience in web and mobile app development,
            complemented by my passion for creating innovative and user-friendly
            solutions. I'm dedicated to continuous learning and always eager to
            take on new challenges in the tech field.
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <a href="mailto:msthisari@gmail.com" >
                  <span>Email :</span> msthisari@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+94704009616" >
                  <span>Mobile :</span>  +94704009616
                </a>
              </p>
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

      <h4 className="subheading">Learning & Growth</h4>
    <div className="journey-container">
      <div className="journey-timeline">
        {journey.map((item, index) => (
          <div
            key={index}
            ref={(el) => (journeyRefs.current[index] = el)}
            className={`journey-item ${visibleItems.includes(index) ? 'slide-in-visible' : ''}`}
          >
            <div className="journey-year">{item.year}</div>
            <div className="journey-content">
              <h3 className="journey-degree">{item.title}</h3>
              <h4 className="journey-school">{item.institution}</h4>
              <p className="journey-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </section>
  );
};

export default About;