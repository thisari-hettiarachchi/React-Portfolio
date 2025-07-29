import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Project from "./pages/Project/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  document.documentElement.setAttribute('data-theme', 'dark');
}, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTopBtn = document.getElementById("scroll-top");
      if (scrollTopBtn) {
        if (window.scrollY > 200) {
          scrollTopBtn.classList.add("active");
        } else {
          scrollTopBtn.classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      {loading ? <LoadingSpinner /> : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
          <a
            href="https://wa.me/+94704009616?text=Hi%20Thisari!%20I%20saw%20your%20portfolio."
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <i className="bx bxl-whatsapp"></i>
          </a>

          <a href="#home" aria-label="ScrollTop" id="scroll-top">
            <i className="bx bxs-chevron-up"></i>
          </a>
        </>
      )}
    </ThemeProvider>
  );
};

export default App;