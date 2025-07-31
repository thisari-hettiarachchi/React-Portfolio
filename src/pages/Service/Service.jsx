import React from "react";
import "./Service.css";

const services = [
  {
    icon: <i className="bx bx-paint"></i>,
    title: "UI / UX Design",
    description: "Crafting intuitive and visually appealing user experiences with tools like Figma and Adobe XD.",
  },
  {
    icon: <i className="bx bx-devices"></i>,
    title: "Web Design",
    description: "Designing responsive and modern websites using HTML, CSS, and Tailwind CSS.",
  },
  {
    icon: <i className="bx bx-code-alt"></i>,
    title: "Web Development",
    description: "Building dynamic web applications using React, JavaScript, PHP, and Node.js.",
  },
];

const Service = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">
        <i className="bx bx-briefcase"></i> Services
      </h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
