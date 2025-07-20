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
import githubImg from "../../assets/github.png";
import vscodeImg from "../../assets/vs.png";
import postmanImg from "../../assets/postman.png";

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
  github: githubImg,
  vscode: vscodeImg,
  postman: postmanImg
};

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", class: "html", endValue: 90 },
      { name: "CSS", class: "css", endValue: 90 },
      { name: "JavaScript", class: "javascript", endValue: 50 },
      { name: "React", class: "react", endValue: 30 },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { name: "Figma", class: "figma", endValue: 90 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", class: "php", endValue: 50 },
      { name: "Python", class: "python", endValue: 30 },
      { name: "Java", class: "java", endValue: 30 },
      { name: "C++", class: "cpp", endValue: 50 },
      { name: "MySQL", class: "mysql", endValue: 80 },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", class: "github", endValue: 50 },
      { name: "VS Code", class: "vscode", endValue: 50 },
      { name: "Postman", class: "postman", endValue: 30 },
    ],
  },
];

const Skills = () => {
  const [progress, setProgress] = useState({});
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillCategories.forEach((category) => {
            animateProgress(category.skills);
          });
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
        {/* First Row: Frontend + Backend */}
        <div className="skill-row">
          {[skillCategories[0], skillCategories[2]].map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="row">
                {category.skills.map((skill) => (
                  <div className="col-6 col-sm-4 col-md-2" key={skill.class}>
                    <div className="progress-card">
                      <div
                        className={`circular-progress ${skill.class}`}
                        style={{
                          background: `conic-gradient(#2EB2D3 ${
                            (progress[skill.class] || 0) * 3.6
                          }deg, #ededed 0deg)`,
                        }}
                      >
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
                        <span className="progress-value">
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
          ))}
        </div>

        {/* Second Row: UI/UX + Tools */}
        <div className="skill-row">
          {[skillCategories[1], skillCategories[3]].map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="row">
                {category.skills.map((skill) => (
                  <div className="col-6 col-sm-4 col-md-2" key={skill.class}>
                    <div className="progress-card">
                      <div
                        className={`circular-progress ${skill.class}`}
                        style={{
                          background: `conic-gradient(#2EB2D3 ${
                            (progress[skill.class] || 0) * 3.6
                          }deg, #ededed 0deg)`,
                        }}
                      >
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
                        <span className="progress-value">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


