import React from "react";
import './Accomplishments.css';
import progLang from '../../assets/progLang.png';
import frontend from '../../assets/frontend.png';
import backend from '../../assets/backend.png';

const Accomplishments = () => {
    return (
        <section id="accomplishments">
            <span className="skillTitle">
                Accomplishments
            </span>
            <span className="skillDescription">
                I have demonstrated my expertise through various certifications in software development, web technologies, and programming. These credentials showcase my skills in areas like Java, the MERN stack (MongoDB, Express.js, React.js, Node.js), and full-stack web development, reflecting my commitment to continuous learning and professional growth
            </span>
            
            <div className="skillBars">

            <div className="skillBar">
                    <img src={progLang} alt="progLang" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>SQL for Data Analysis</h2>
                        <p>Linkedin</p>
                        <a 
                            href="https://www.linkedin.com/learning/certificates/bcbecbabe3a77362bb7b85fc0c946a8383244db414d227904738f223ab8a7253?trk=share_certificate" 
                            target="_blank" 
                            rel="noreferrer"
                            className="accomplishmentLink"
                        >
                            View Credentials
                        </a>
                    </div>
                </div>



                <div className="skillBar">
                    <img src={progLang} alt="progLang" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Agile Software Development</h2>
                        <p>Linkedin</p>
                        <a 
                            href="https://www.linkedin.com/learning/certificates/9e7b2dd8a758f2b19dcd185a143d6c93c344df1c8102b275fe3b5220bf8e0b48" 
                            target="_blank" 
                            rel="noreferrer"
                            className="accomplishmentLink"
                        >
                            View Credentials
                        </a>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={progLang} alt="progLang" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Learning Java 17</h2>
                        <p>Linkedin</p>
                        <a 
                            href="https://www.linkedin.com/learning/certificates/2eb51138cc613df6e8c29ff0fd3815f5f3cbf22450476e354743632a7929c6de" 
                            target="_blank" 
                            rel="noreferrer"
                            className="accomplishmentLink"
                        >
                            View Credentials
                        </a>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={progLang} alt="progLang" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Introduction to Docker</h2>
                        <p>Coursera</p>
                        <a 
                            href="https://www.coursera.org/account/accomplishments/verify/VZNAD49PYE71" 
                            target="_blank" 
                            rel="noreferrer"
                            className="accomplishmentLink"
                        >
                            View Credentials
                        </a>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={frontend} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Linux and SQL</h2>
                        <p>Coursera</p>
                        <a 
                            href="https://www.coursera.org/account/accomplishments/verify/UOO2CU6BMO80" 
                            target="_blank" 
                            rel="noreferrer"
                            className="accomplishmentLink"
                        >
                            View Credentials
                        </a>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={backend} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Networks and Network Security</h2>
                        <p>Coursera</p>
                        <a 
                            href="https://www.coursera.org/account/accomplishments/verify/AF4Q98LV7EF9" 
                            target="_blank" 
                            rel="noreferrer"
                            className="accomplishmentLink"
                        >
                            View Credentials
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accomplishments;