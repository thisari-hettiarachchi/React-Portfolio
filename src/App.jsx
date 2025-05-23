import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
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
        </>
      )}
    </>
  );
};

export default App;
