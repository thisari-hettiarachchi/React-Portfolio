import React, { useState } from "react";
import "./Projects.css";

import {
  YumCraveImg,
  ShopMeImg,
  PortfolioImg,
  CafeCloudImg,
  ChatbotImg,
  AureaImg,
  RedovenImg,
  DchatbotImg,
  AureaNewImg,
  SpaceFinderImg
} from "../../assets/index.js";

const projectData = [
  {
    title: "RedOven",
    category: "Web Development",
    image: RedovenImg,
    description: "A modern fully fuctiona pizza ordering website with an intuitive UI. Built with React, CSS/Bootstrap, JavaScript and MongoDB",
    githubLinks: [
      { label: "code", url: "https://github.com/thisari-hettiarachchi/React-Portfolio.git" }
    ]
  },
  {
    title: "YumCrave",
    category: "Web Design",
    image: YumCraveImg,
    description: "A modern food ordering webdesign with an intuitive UI. Built with HTML, CSS, and JavaScript.",
    githubLinks: [
      { label: "Code", url: "https://github.com/thisari-hettiarachchi/YumCrave.git" }
    ]
  },
  {
    title: "ShopMe",
    category: "Web Design",
    image: ShopMeImg,
    description: "An e-commerce shoe store webdesign with an intuitive UI. Built with HTML, CSS, and JavaScript. ",
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
    image: DchatbotImg,
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
      { label: "Figma Preview", url: "https://www.figma.com/proto/TCaO5eC2333x4ljVWPU6PT/CafeCloud?t=vb1vCC9nDlzmrkXL-1" }
    ]
  },
  {
    title: "Aurea",
    category: "UI Design",
    image: AureaImg,
    description: "A UI/UX design project for Aurea Jewellery Shop’s website landing page. Crafted in Figma with elegant and modern components to showcase jewellery categories, highlight featured products, testimonials and newsletter.",
    githubLinks: [
      { label: "Figma Preview", url: "https://www.figma.com/proto/WYpdqlIwket35TtLc49WaW/Untitled?node-id=0-1&t=vb1vCC9nDlzmrkXL-1" }
    ]
  },
  {
    title: "Aurea",
    category: "Web Design",
    image: AureaNewImg,
    description: "A responsive landing page for a jewelry brand, developed using HTML and CSS with a clean, elegant UI inspired by the Figma design.",
    githubLinks: [
      { label: "Code", url: "https://github.com/thisari-hettiarachchi/Aurea.git" }
    ]
  }, 
  {
    title: "SpaceFinder",
    category: "UI Design",
    image: SpaceFinderImg,
    description: "A UI/UX design project for a smart parking finder app. Designed in Figma with user-centered components for easy parking space search, reservation, and real-time availability tracking.",
    githubLinks: [
      { label: "Figma Preview", url: "https://www.figma.com/proto/o5vb6bevW9Pwpg9CcEcmkQ/Parking?node-id=0-1&t=jnXMGTeqDPSsVh3D-1" }
    ]
  }
];


const categories = ["Web Design", "Web Development", "UI Design", "Dekstop Application"]; 

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
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
        {filteredProjects.map((project, index) => (
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
    </section>
  );
};

export default Projects;



















