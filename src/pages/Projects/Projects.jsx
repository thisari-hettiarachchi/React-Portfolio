import React, { useState, useEffect } from "react";
import AutoMartImg from "../../assets/AutoMart.PNG";
import YumCraveImg from "../../assets/YumCrave.PNG";
import ShopMeImg from "../../assets/ShopMe.PNG";
import RedOven from "../../assets/RedOven.png";
import PortfolioImg from "../../assets/Portfolio.PNG";
import ChatbotImg from "../../assets/chatbot.PNG";
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
    title: "React Portfolio",
    imgSrc: PortfolioImg,
    alt: "Portfolio Project",
    link: "https://github.com/thisari-hettiarachchi/Portfolio",
  },
  {
    id: 5,
    category: "webdevelopment",
    title: "Pizza Ordering System",
    imgSrc: RedOven,
    alt: "Pizza Ordering System",
    link: "https://github.com/thisari-hettiarachchi/Portfolio",
  },
  {
    id: 6,
    category: "softwaredevelopment",
    title: "AI-Based Chatbot",
    imgSrc: ChatbotImg,
    alt: "AI-Based Chatbot",
    link: "https://github.com/thisari-hettiarachchi/Portfolio",
  },
  {
    id: 7,
    category: "webdevelopment",
    title: "Portfolio",
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
  { id: "softwaredevelopment", label: "Software Development" },
];

const PROJECTS_PER_PAGE = 3;

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setPage(0);
  };

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const displayedProjects = filteredProjects.slice(
    page * PROJECTS_PER_PAGE,
    (page + 1) * PROJECTS_PER_PAGE
  );

  const handlePrev = () => {
    if (page > 0) {
      setAnimating(true);
      setTimeout(() => {
        setPage((prev) => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setAnimating(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setPage((prevPage) => (prevPage + 1) % totalPages);
        setAnimating(false);
      }, 300);
    }, 6000); // Auto slide every 6 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

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
            onClick={() => handleTabClick(tab.id)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleTabClick(tab.id);
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>

      <div className="projects-row">
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className="pagination-icon left"
        >
          <i className="bx bx-chevron-left"></i>
        </button>

        <div className={`project-list ${animating ? "slide-animation" : ""}`}>
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <div className="project-item" key={project.id}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <i className="bx bxs-show"></i>
                    </div>
                    <img src={project.imgSrc} alt={project.alt} />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                </a>
              </div>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className="pagination-icon right"
        >
          <i className="bx bx-chevron-right"></i>
        </button>
      </div>

      <div className="pagination-text" style={{ textAlign: "center", marginTop: "1rem" }}>
        Page {page + 1} of {totalPages}
      </div>
    </section>
  );
};

export default Projects;
