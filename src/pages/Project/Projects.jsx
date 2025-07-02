import React, { useState } from "react";
import "./Projects.css";

import {
  YumCraveImg,
  ShopMeImg,
  PortfolioImg,
  CafeCloudImg,
  ChatbotImg
} from "../../assets/index.js";

const projectData = [
  {
    title: "YumCrave",
    category: "Web Design",
    image: YumCraveImg,
    description: "A modern food ordering website with an intuitive UI. Built with HTML, CSS, and JavaScript.",
    githubLinks: [
      { label: "Code", url: "https://github.com/thisari-hettiarachchi/YumCrave.git" }
    ]
  },
  {
    title: "ShopMe",
    category: "Web Design",
    image: ShopMeImg,
    description: "An e-commerce shoe store that includes a product catalog, filtering features, and a responsive layout for all screen sizes.",
    githubLinks: [
      { label: "Code", url: "https://github.com/thisari-hettiarachchi/ShopMe.git" }
    ]
  },
  {
    title: "Portfolio",
    category: "Web Development",
    image: PortfolioImg,
    description: "My personal portfolio showcasing my projects, skills, and resume. Developed using HTML, CSS, and JavaScript, and also a React version.",
    githubLinks: [
      { label: "HTML Version", url: "https://github.com/thisari-hettiarachchi/Portfolio.git" },
      { label: "React Version", url: "https://github.com/thisari-hettiarachchi/React-Portfolio.git" }
    ]
  },
  {
    title: "Dialogue Based Chatbot",
    category: "Dekstop Application",
    image: ChatbotImg,
    description: "A Python-based desktop chatbot that helps students understand programming concepts. Created using Tkinter for the GUI.",
    githubLinks: [
      { label: "Code", url: "https://github.com/thisari-hettiarachchi/Dialogue-Based-Desktop-Program.git" }
    ]
  },
  {
    title: "AI Chatbot",
    category: "Dekstop Application",
    image: ChatbotImg,
    description: "An intelligent chatbot powered by basic AI techniques. It can respond to general queries and simulate a conversational experience.",
    githubLinks: [
      { label: "Code", url: "https://github.com/thisari-hettiarachchi/AI-Chatbot.git" }
    ]
  },
  {
    title: "CafeCloud",
    category: "UI Design",
    image: CafeCloudImg,
    description: "A UI/UX design project for a coffee ordering system. Designed in Figma with user-friendly components for smooth coffee selection and checkout.",
    githubLinks: [
      { label: "Figma Preview", url: "https://github.com/thisari-hettiarachchi/AI-Chatbot.git" }
    ]
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
            <div className="github-links">
                {project.githubLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label.toLowerCase().includes("figma") ? (
                      <i className="bx bxl-figma"></i>
                    ) : (
                      <i className="bx bxl-github"></i>
                    )}{" "}
                    {link.label}
                  </a>
                ))}
              </div>
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
