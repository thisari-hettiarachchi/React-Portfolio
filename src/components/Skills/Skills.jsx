import React, { useEffect, useRef, useState } from "react";
import "../Skills/Skills.css";

const technicalSkills = [
  { name: "HTML", class: "html", endValue: 90 },
  { name: "CSS", class: "css", endValue: 90 },
  { name: "JavaScript", class: "javascript", endValue: 40 },
  { name: "PHP", class: "php", endValue: 30 },
  { name: "Python", class: "python", endValue: 50 },
  { name: "Java", class: "java", endValue: 50 },
  { name: "C++", class: "cpp", endValue: 50 },
  { name: "MySQL", class: "mysql", endValue: 80 },
];

const professionalSkills = [
  { name: "Teamwork", class: "teamwork", endValue: 90 },
  { name: "Time Management", class: "timemgt", endValue: 80 },
  { name: "Communication", class: "communication", endValue: 90 },
  { name: "Adaptability", class: "adaptability", endValue: 75 },
];

const Skills = () => {
  const [progress, setProgress] = useState({});
  const skillRef = useRef(null);
  const profSkillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateProgress(technicalSkills, "circular");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) observer.observe(skillRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateProgress(professionalSkills, "bar");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (profSkillRef.current) observer.observe(profSkillRef.current);
  }, []);

  const animateProgress = (skills, type) => {
    skills.forEach((skill) => {
      let value = 0;
      const interval = setInterval(() => {
        value++;
        setProgress((prev) => ({
          ...prev,
          [skill.class]: value,
        }));
        if (value === skill.endValue) clearInterval(interval);
      }, 30);
    });
  };

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="bx bx-laptop"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="skill-container" ref={skillRef}>
        <div className="row">
          <div className="col-md-6 skill-with-progress">
            <h3 className="sub-heading">Technical Skills</h3>
            <div className="row">
              {technicalSkills.map((skill) => (
                <div className="col-6 col-md-3" key={skill.class}>
                  <div className="progress-card">
                    <div
                      className={`circular-progress ${skill.class}`}
                      style={{
                        background: `conic-gradient(#2EB2D3 ${progress[skill.class] * 3.6 || 0}deg, #ededed 0deg)`,
                      }}
                    >
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

          <div className="col-md-6" ref={profSkillRef}>
            <h3 className="bar-sub-heading">Professional Skills</h3>
            <div className="progress-bar-section">
              {professionalSkills.map((skill) => (
                <div className="progress-item" key={skill.class}>
                  <span className="skill-name">{skill.name}</span>
                  <div
                    className="progress-bar"
                    style={{
                      background: `linear-gradient(90deg, #2EB2D3 ${progress[skill.class] || 0}%, #e0e0e0 ${
                        progress[skill.class] || 0
                      }%)`,
                    }}
                  >
                    <span className="progress-bar-value">
                      {progress[skill.class] || 0}%
                    </span>
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
