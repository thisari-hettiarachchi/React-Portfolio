import React, { useEffect, useRef, useState } from "react";
import "../Skills/Skills.css";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import jsImg from "../../assets/javascript.png";
import phpImg from "../../assets/php.png";
import pythonImg from "../../assets/python.png";
import javaImg from "../../assets/java.png";
import cppImg from "../../assets/c++.png";
import mysqlImg from "../../assets/mysql.png";
import figmaImg from "../../assets/figma.png";
import reactImg from "../../assets/react.png";

const skillImages = {
  html: htmlImg,
  css: cssImg,
  javascript: jsImg,
  php: phpImg,
  python: pythonImg,
  java: javaImg,
  cpp: cppImg,
  mysql: mysqlImg,
  figma: figmaImg,
  react: reactImg,
};

const technicalSkills = [
  { name: "HTML", class: "html", endValue: 90 },
  { name: "CSS", class: "css", endValue: 90 },
  { name: "JavaScript", class: "javascript", endValue: 40 },
  { name: "PHP", class: "php", endValue: 30 },
  { name: "Python", class: "python", endValue: 50 },
  { name: "Java", class: "java", endValue: 50 },
  { name: "C++", class: "cpp", endValue: 50 },
  { name: "MySQL", class: "mysql", endValue: 80 },
  { name: "Figma", class: "figma", endValue: 50 },
  { name: "React", class: "react", endValue: 50 },
];

const Skills = () => {
  const [progress, setProgress] = useState({});
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateProgress(technicalSkills);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) observer.observe(skillRef.current);
  }, []);

  const animateProgress = (skills) => {
    skills.forEach((skill) => {
      const end = skill.endValue;
      const duration = 5000;
      const startTime = performance.now();

      const animate = (time) => {
        const progressTime = time - startTime;
        const progressValue = Math.min((progressTime / duration) * end, end);
        const rounded = Math.round(progressValue);

        setProgress((prev) => {
          if (prev[skill.class] === rounded) return prev;
          return {
            ...prev,
            [skill.class]: rounded,
          };
        });

        if (progressValue < end) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="bx bx-laptop"></i> Technical Skills
      </h2>

      <div className="skill-container" ref={skillRef}>
        <div className="row">
          <div className="col-md-12 skill-with-progress">
            <div className="row">
              {technicalSkills.map((skill) => (
                <div className="col-6 col-sm-4 col-md-2" key={skill.class}>
                  <div className="progress-card">
                    <div
                      className={`circular-progress ${skill.class}`}
                      style={{
                        background: `conic-gradient(#2EB2D3 ${
                          (progress[skill.class] || 0) * 3.6
                        }deg, #ededed 0deg)`,
                        position: "relative",
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        margin: "0 auto",
                      }}

                    >
                      {/* Centered skill image */}
                      <img
                        src={skillImages[skill.class]}
                        alt={skill.name}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "40px",
                          height: "40px",
                          transform: "translate(-50%, -50%)",
                          pointerEvents: "none",
                          userSelect: "none",
                        }}
                        draggable={false}
                      />

                      {/* Static percentage below the image */}
                      <span
                        className="progress-value"
                        style={{
                          position: "absolute",
                          top: "70%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontWeight: "bold",
                          fontSize: "1rem",
                          color: "#2EB2D3",
                          userSelect: "none",
                          pointerEvents: "none",
                        }}
                      >
                        {progress[skill.class] || 0}%
                      </span>

                    </div>
                    <br />
                    <span className="text">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
