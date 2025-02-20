import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Navbar from "C://Users/Anita Kalsekar/portfolio/portfolio/src/components/NavBar/Navbar.jsx";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Accomplishments from "./components/Accomplishments/Accomplishments";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div data-aos="fade-down">
        <Intro />
      </div>
      <div data-aos="fade-right">
        <Skills />
      </div>
      <div data-aos="fade-up">
        <Projects />
      </div>
      <div data-aos="zoom-in">
        <Accomplishments />
      </div>
      <div data-aos="flip-left">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;