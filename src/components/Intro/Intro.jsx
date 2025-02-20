import React from "react";
import "./Intro.css";
import pp from "../../assets/profilePic.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import useTypingAnimation from "./useTypingAnimation ";

const Intro = () => {
  const texts = ["Software Engineer", "Java Developer", "MERN Stack Developer"];
  const { text, blink } = useTypingAnimation(texts, 100);

  return (
    <section className="" id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Preeti</span> <br />
          <span>
            {text}
            <span className={`cursor ${blink ? "blink" : ""}`}>|</span>
          </span>
        </span>

        <p className="introPara">
          Skilled in <strong className="intro-highlights">Java Development</strong>, <strong className="intro-highlights">MERN Stack Development</strong>, and <br /> <strong className="intro-highlights">Data
          Analysis</strong>.
          I specialize in creating robust, scalable, and <br /> user-centric
          applications, leveraging data-driven insights to enhance performance and
          decision-making.
        </p>

        <Link>
          <button
            className="hireBtn"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <FontAwesomeIcon icon={faSuitcase} className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>

      <img src={pp} alt="profilePic" className="pp" />
    </section>
  );
};

export default Intro;
