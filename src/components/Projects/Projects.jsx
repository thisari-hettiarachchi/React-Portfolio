import React, { useState } from "react";
import AutoMartImg from "../../assets/AutoMart.PNG";
import YumCraveImg from "../../assets/YumCrave.PNG";
import ShopMeImg from "../../assets/ShopMe.PNG";
import PortfolioImg from "../../assets/Portfolio.PNG";
import "../Projects/Projects.css";

const projectsData = [
  {
    id: 1,
    category: "webdevelopment",
    title: "AutoMart Car Rental",
    imgSrc: AutoMartImg,
    alt: "AutoMart Project",
    link: "https://github.com/thisari-hettiarachchi/Database-Car-Rental",
  },
  {
    id: 2,
    category: "webdesign",
    title: "YumCrave",
    imgSrc: YumCraveImg,
    alt: "YumCrave Project",
    link: "https://github.com/thisari-hettiarachchi/YumCrave",
  },
  {
    id: 3,
    category: "webdesign",
    title: "ShopMe",
    imgSrc: ShopMeImg,
    alt: "ShopMe Project",
    link: "https://github.com/thisari-hettiarachchi/ShopMe",
  },
  {
    id: 4,
    category: "webdevelopment",
    title: "Portfolio",
    imgSrc: PortfolioImg,
    alt: "Portfolio Project",
    link: "https://github.com/thisari-hettiarachchi/Portfolio",
  },
  {
    id: 5,
    category: "webdevelopment",
    title: "React Portfolio",
    imgSrc: PortfolioImg,
    alt: "Portfolio Project",
    link: "https://github.com/thisari-hettiarachchi/Portfolio",
  },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "webdesign", label: "Web Design" },
  { id: "applications", label: "Applications" },
  { id: "webdevelopment", label: "Web Development" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <section className="projects-container" id="projects">
      <h2 className="heading">
        <i className="bx bx-code-alt"></i> Projects
      </h2>

      <div className="project-tab">
        {tabs.map((tab) => (
          <span
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") setActiveTab(tab.id);
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <div className="project-item" key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <i className="bx bxs-show"></i>
                </div>
                <img src={project.imgSrc} alt={project.alt} />
              </figure>
              <h3 className="project-title">{project.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
