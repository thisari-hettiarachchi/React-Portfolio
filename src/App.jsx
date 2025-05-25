import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
    <>
      {loading ? <LoadingSpinner /> : (
        <>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Navbar />

          {/* Scroll to Top Button */}
          <a href="#home" aria-label="ScrollTop" id="scroll-top">
            <i className="bx bxs-chevron-up"></i>
          </a>
        </>
      )}
    </>
  );
};

export default App;
