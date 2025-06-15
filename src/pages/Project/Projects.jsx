import React, { useState } from "react";
import "./Projects.css";

import {AutoMartImg,
    YumCraveImg,
    ShopMeImg,
    RedOvenImg, 
    PortfolioImg,
    ChatbotImg} from "../../assets/index.js";

const projectData = [
  {
    title: "AutoMart",
    category: "Web Development",
    image: AutoMartImg,
    description: "HTML, CSS, PHP, JavaScript",
    github: "https://github.com/thisari-hettiarachchi/Database-Car-Rental.git"
  },
  {
    title: "YumCrave",
    category: "Web Design",
    image: YumCraveImg,
    description: "HTML, CSS, JavaScript",
    github: "https://github.com/thisari-hettiarachchi/YumCrave.git"
  },
  {
    title: "ShopMe",
    category: "Web Design",
    image: ShopMeImg,
    description: "HTML, CSS, JavaScript",
    github: "https://github.com/thisari-hettiarachchi/ShopMe.git"
  },
  {
    title: "Portfolio",
    category: "Web Development",
    image: PortfolioImg,
    description: "HTML, CSS, JavaScript",
    github: "https://github.com/thisari-hettiarachchi/Portfolio.git"
  },
  {
    title: "Portfolio",
    category: "Web Development",
    image: PortfolioImg,
    description: "React JS, CSS, JavaScript",
    github: "https://github.com/thisari-hettiarachchi/React-Portfolio.git"
  },
  {
    title: "Dialogue Based Chatbot",
    category: "Dekstop Application",
    image: ChatbotImg,
    description: "Python, Twinker",
    github: "https://github.com/thisari-hettiarachchi/Dialogue-Based-Desktop-Program.git"
  },
  {
    title: "RedOven",
    category: "Web Development",
    image: RedOvenImg,
    description: "React, MongoDB",
    github: "https://github.com/thisari-hettiarachchi/pizza-order-delivery-system.git"
  },
  ,
  {
    title: "AI Chatbot",
    category: "Dekstop Application",
    image: ChatbotImg,
    description: "Python, Twinker",
    github: "https://github.com/thisari-hettiarachchi/AI-Chatbot.git"
  }
];


const categories = ["All", "Web Design", "Web Development", "UI Design", "Dekstop Application"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setShowAll(false); 
  };

  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        <i className="bx bx-code"></i> Projects
      </h2>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-container">
        {visibleProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className="description">{project.description}</p>
            <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i> View Code
            </a>

          </div>
        ))}
      </div>

      {filteredProjects.length > 4 && (
        <div className="show-more">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
