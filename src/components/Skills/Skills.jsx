import React from "react";
import './Skills.css';
import progLang from '../../assets/progLang.png';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';
import database from '../../assets/database.png';
import toolsAndTech from '../../assets/toolsAndTech.png';

const Skills = () =>{
    return (
        <section id="skills">
            <span className="skillTitle">
                What I do
            </span>
                <span className="skillDescription">
                I specialize in delivering innovative and efficient software solutions. With expertise in Java development, the MERN stack (MongoDB, Express.js, React.js, Node.js), and web development, I bring ideas to life through robust and scalable applications. My skills include:
                </span>
            
            <div className="skillBars">
                <div className="skillBar">
                    <img src={progLang} alt="progLang" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Programming Languages:</h2>
                        <p>Java • JavaScript • Python • C/C++
                        </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={frontend} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Front-End:</h2>
                        <p>React.js • HTML • CSS • Bootstrap • JavaScript</p>
                    </div>
                </div>


                <div className="skillBar">
                    <img src={backend} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Back-End:</h2>
                        <p>Node.js • Express.js • Java</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={database} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Databases:</h2>
                        <p>MongoDB • MySQL</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={toolsAndTech} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Tools and Technologies:</h2>
                        <p>Linux/Kali Linux • Git and GitHub • AWS • Docker • REST APIs</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;