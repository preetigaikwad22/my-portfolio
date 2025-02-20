import React from "react";
import './Footer.css';
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© 2025 Preeti Gaikwad. All Rights Reserved.</p>
                <nav>
                    <Link to="skills" className="link">About</Link> |
                    <Link to="projects" className="link">Projects</Link> |
                    <Link to="contactPage" className="link">Contact</Link>
                </nav>
                <div className="social-links">
                    <a href="https://linkedin.com/in/preeti-gaikwad-sde" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                    <a href="https://github.com/preetigaikwad22" target="_blank" rel="noopener noreferrer">GitHub</a> |
                    <a href="https://twitter.com/PreeOnTech" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
