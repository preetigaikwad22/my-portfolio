import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDescription">Feel free to reach out to me for collaborations, project inquiries, or just to say hello!</span>

                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea name="Message" rows="5" placeholder="Write your Message" className="msg"></textarea>
                    <button className="submitBtn" type="submit" value="send">Submit</button>

                    <div className="SocialsLinks">
                        
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
