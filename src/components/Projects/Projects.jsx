import React from "react";
import "./Projects.css";
import progLang from "../../assets/progLang.png";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">My Portfolio</h2>
      <span className="projectsDescription">
        Explore a showcase of my work, where innovative software solutions meet
        seamless design and functionality. Each project reflects my proficiency
        in Java development, the MERN stack, and full-stack web development.
        From creating dynamic front-end experiences to building scalable
        back-end systems, my portfolio highlights diverse solutions crafted with
        tools like React.js, Node.js, MongoDB, and more. Let my projects speak
        for my passion for technology, problem-solving, and delivering impactful
        results.
      </span>

      <div className="projectBars">
        <div className="projectBar">
          <img src={frontend} alt="" className="projectBarImg" />
          <div className="projectBarText">
            <h2>
              Interview 360 <br />
            </h2>
            <p>MERN Stack • RESTful APIs • AI • JavaScript • NextJS</p>
            <a
              href="https://github.com/preetigaikwad22/interview360"
              className="projectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projectBar">
          <img src={frontend} alt="" className="projectBarImg" />
          <div className="projectBarText">
            <h2>
              Ping Me <br />
            </h2>
            <p>MERN Stack • Socket.io</p>
            <a
              href="https://github.com/preetigaikwad22/ping-me"
              className="projectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projectBar">
          <img src={progLang} alt="progLang" className="projectBarImg" />
          <div className="projectBarText">
            <h2>Ola Rides Data Analysis</h2>
            <p>MySQL • Power Bi • Excel</p>
            <a
              href="https://github.com/preetigaikwad22/Ola-Ride-data-Analysis"
              className="projectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projectBar">
          <img src={progLang} alt="progLang" className="projectBarImg" />
          <div className="projectBarText">
            <h2>Library Management System</h2>
            <p>Java • OOPs • Data Structures</p>
            <a
              href="https://github.com/preetigaikwad22/LibraryManagementSystem"
              className="projectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projectBar">
          <img src={backend} alt="" className="projectBarImg" />
          <div className="projectBarText">
            <h2>AI-Powered Discord Bot</h2>
            <p>
              {" "}
              Python • API Development • Discord API • OpenRouter's Deepseek API
              • Error Handling • Real-time Data Processing
            </p>
            <a
              href="https://github.com/preetigaikwad22/ai-bot"
              className="projectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projectBar">
          <img src={backend} alt="" className="projectBarImg" />
          <div className="projectBarText">
            <h2>Employee Payroll System</h2>
            <p> Java • OOPs • Data Structures </p>
            <a
              href="https://github.com/preetigaikwad22/employee-payroll-system"
              className="projectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projectBar">
          <img src={backend} alt="" className="projectBarImg" />
          <div className="projectBarText">
            <h2>Hospital Management System</h2>
            <p> Java • OOPs • Data Structures • SQL • JDBC</p>
            <a
              href="https://github.com/preetigaikwad22/hospital-management-system"
              className="projectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="projectBar">
          <img src={backend} alt="" className="projectBarImg" />
          <div className="projectBarText">
            <h2>Pat and Pet</h2>
            <p>HTML • CSS • JavaScript • PHP • MySQL</p>
            <a
              href="https://pat-and-pet.netlify.app/"
              className="projectLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
