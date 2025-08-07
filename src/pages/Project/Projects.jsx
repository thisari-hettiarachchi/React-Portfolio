import React, { useState, useRef, useEffect } from "react";
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
  SpaceFinderImg,
  SeatifyImg,
} from "../../assets/index.js";

const projectData = [
  {
    title: "RedOven - Pizza Ordering Website",
    category: "Web Apps",
    image: RedovenImg,
    description:
      "A modern fully fuctiona pizza ordering website with an intuitive UI. Built with React, CSS/Bootstrap, JavaScript and MongoDB",
    githubLinks: [
      {
        label: "code",
        url: "https://github.com/DH-0216/pizza-order-delivery-system.git",
      },
    ],
  },
  {
    title: "YumCrave - Food Ordering Website",
    category: "Web Apps",
    image: YumCraveImg,
    description:
      "A modern food ordering webdesign with an intuitive UI. Built with HTML, CSS, and JavaScript.",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/YumCrave.git",
      },
    ],
  },
  {
    title: "ShopMe - E-commerce Shoe Store",
    category: "Web Apps",
    image: ShopMeImg,
    description:
      "An e-commerce shoe store webdesign with an intuitive UI. Built with HTML, CSS, and JavaScript. ",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/ShopMe.git",
      },
    ],
  },
  {
    title: "Portfolio - My Personal Website",
    category: "Web Apps",
    image: PortfolioImg,
    description:
      "My personal portfolio showcasing my projects, skills, and resume. Developed using HTML, CSS, and JavaScript, and also a React version.",
    githubLinks: [
      {
        label: "HTML Version",
        url: "https://github.com/thisari-hettiarachchi/Portfolio.git",
      },
      {
        label: "React Version",
        url: "https://github.com/thisari-hettiarachchi/React-Portfolio.git",
      },
    ],
  },
  {
    title: "Dialogue Based Chatbot",
    category: "Dekstop Application",
    image: DchatbotImg,
    description:
      "A Python-based desktop chatbot that helps students understand programming concepts. Created using Tkinter for the GUI.",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/Dialogue-Based-Desktop-Program.git",
      },
    ],
  },
  {
    title: "AI Chatbot ",
    category: "Dekstop Application",
    image: ChatbotImg,
    description:
      "An intelligent chatbot powered by basic AI techniques. It can respond to general queries and simulate a conversational experience.",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/AI-Chatbot.git",
      },
    ],
  },
  {
    title: "CafeCloud - Coffee Ordering System",
    category: "UI Design",
    image: CafeCloudImg,
    description:
      "A UI/UX design project for a coffee ordering system. Designed in Figma with user-friendly components for smooth coffee selection and checkout.",
    githubLinks: [
      {
        label: "Figma Preview",
        url: "https://www.figma.com/proto/TCaO5eC2333x4ljVWPU6PT/CafeCloud?t=vb1vCC9nDlzmrkXL-1",
      },
    ],
  },
  {
    title: "Aurea - Jewelry Shop Landing Page",
    category: "UI Design",
    image: AureaImg,
    description:
      "A UI/UX design project for Aurea Jewellery Shop’s website landing page. Crafted in Figma with elegant and modern components to showcase jewellery categories, highlight featured products, testimonials and newsletter.",
    githubLinks: [
      {
        label: "Figma Preview",
        url: "https://www.figma.com/proto/WYpdqlIwket35TtLc49WaW/Untitled?node-id=0-1&t=vb1vCC9nDlzmrkXL-1",
      },
    ],
  },
  {
    title: "Aurea - Jewelry Shop Landing Page",
    category: "Web Apps",
    image: AureaNewImg,
    description:
      "A responsive landing page for a jewelry brand, developed using HTML and CSS with a clean, elegant UI inspired by the Figma design.",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/thisari-hettiarachchi/Aurea.git",
      },
    ],
  },
  {
    title: "SpaceFinder - Parking Spaces Finder App ",
    category: "UI Design",
    image: SpaceFinderImg,
    description:
      "A UI/UX design project for a smart parking finder app. Designed in Figma with user-centered components for easy parking space search, reservation, and real-time availability tracking.",
    githubLinks: [
      {
        label: "Figma Preview",
        url: "https://www.figma.com/proto/o5vb6bevW9Pwpg9CcEcmkQ/Parking?node-id=0-1&t=jnXMGTeqDPSsVh3D-1",
      },
    ],
  },
  {
    title: "Seatify - Movie Ticket Booking System",
    category: "Web Apps",
    image: SeatifyImg,
    description:
      "A responsive landing page for a jewelry brand, developed using HTML and CSS with a clean, elegant UI inspired by the Figma design.",
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/DH-0216/Seatify-Movie-Ticket-Booking-System.git",
      },
    ],
  },
];

const categories = ["Web Apps", "UI Design", "Dekstop Application"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const checkScrollBoundaries = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const updateActiveIndex = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const card = scrollRef.current.children[0];

      if (!card) return;

      const cardWidth = card.offsetWidth;
      const gap = 24; 
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));

      setActiveIndex(Math.min(newIndex, filteredProjects.length - 1));
    }
  };


  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setActiveIndex(0);
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
  };

  const openModal = (image, title) => {
    setModalImage(image);
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    setModalTitle("");
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current && scrollRef.current.children[index]) {
      const card = scrollRef.current.children[index];
      const containerLeft = scrollRef.current.offsetLeft;
      const cardLeft = card.offsetLeft;
      const scrollPosition = cardLeft - containerLeft;

      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleLeft = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleRight = () => {
    if (activeIndex < filteredProjects.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handleScroll = () => {
    checkScrollBoundaries();
    updateActiveIndex();
  };

  useEffect(() => {
    const handleResize = () => {
      checkScrollBoundaries();
    };

    window.addEventListener("resize", handleResize);
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollBoundaries);
    }

    checkScrollBoundaries();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollBoundaries);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleLeft();
      } else if (e.key === "ArrowRight") {
        handleRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredProjects.length]);

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
        {filteredProjects.length > 1 && (
          <button
            className="arrow left-arrow"
            onClick={handleLeft}
            disabled={!canScrollLeft}
            aria-label="Previous project"
          >
            &#8592;
          </button>
        )}
        <div
          className={`project-scroll-wrapper ${
            isMobile ? "mobile-scroll" : "desktop-scroll"
          }`}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                onClick={() => openModal(project.image, project.title)}
                style={{ cursor: "pointer" }}
              />
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
        {filteredProjects.length > 1 && (
          <button
            className="arrow right-arrow"
            onClick={handleRight}
            disabled={!canScrollRight}
            aria-label="Next project"
          >
            &#8594;
          </button>
        )}
      </div>

      {filteredProjects.length > 1 && (
        <div className="dot-indicators">
          {filteredProjects.map((_, i) => (
            <span
              key={i}
              className={`dot${activeIndex === i ? " active" : ""}`}
              onClick={() => scrollToIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img src={modalImage} alt={modalTitle} className="modal-image" />
            <h3>{modalTitle}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
