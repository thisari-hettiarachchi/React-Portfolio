import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
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
        </>
      )}
    </>
  );
};

export default App;
