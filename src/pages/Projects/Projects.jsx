import React, { useState, useEffect, useRef } from "react";
import AutoMartImg from "../../assets/AutoMart.PNG";
import YumCraveImg from "../../assets/YumCrave.PNG";
import ShopMeImg from "../../assets/ShopMe.PNG";
import RedOvenImg from "../../assets/RedOven.PNG";
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
    imgSrc: RedOvenImg,
    alt: "Pizza Ordering System",
    link: "https://github.com/thisari-hettiarachchi/Portfolio",
  },
  {
    id: 6,
    category: "webdevelopment",
    title: "Portfolio",
    imgSrc: PortfolioImg,
    alt: "Portfolio Project",
    link: "https://github.com/thisari-hettiarachchi/Portfolio",
  },
  {
    id: 7,
    category: "softwaredevelopment",
    title: "AI-Based Chatbot",
    imgSrc: ChatbotImg,
    alt: "AI-Based Chatbot",
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

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const animationTimeout = useRef(null);

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
    if (page === 0) return;
    setAnimating(true);
    clearTimeout(animationTimeout.current);
    animationTimeout.current = setTimeout(() => {
      setPage((prev) => Math.max(prev - 1, 0));
      setAnimating(false);
    }, 300); // animation duration
  };

  const handleNext = () => {
    if (page === totalPages - 1) return;
    setAnimating(true);
    clearTimeout(animationTimeout.current);
    animationTimeout.current = setTimeout(() => {
      setPage((prev) => Math.min(prev + 1, totalPages - 1));
      setAnimating(false);
    }, 300);
  };

  // Auto slide every 8 seconds with animation
  useEffect(() => {
    if (totalPages === 0) return;

    const autoSlide = () => {
      setAnimating(true);
      setTimeout(() => {
        setPage((prev) => (prev + 1) % totalPages);
        setAnimating(false);
      }, 300);
    };

    const interval = setInterval(autoSlide, 8000);

    return () => clearInterval(interval);
  }, [totalPages]);

  // Swipe handlers for touch devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diff > swipeThreshold) {
      handleNext();
    } else if (diff < -swipeThreshold) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="projects-container"
      id="projects"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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

      <div className={`project-list ${animating ? "slide-animation" : ""}`}>
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
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
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination-buttons">
          <button
            onClick={handlePrev}
            disabled={page === 0}
            className="pagination-icon left"
            aria-label="Previous page"
          >
            <i className="bx bx-chevron-left"></i>
          </button>

          <span className="pagination-text">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={page === totalPages - 1}
            className="pagination-icon right"
            aria-label="Next page"
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
