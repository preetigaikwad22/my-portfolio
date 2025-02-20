import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" to="intro"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-180} duration ={500}className="desktopMenuListItem">Home</Link>

                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-180} duration ={500}className="desktopMenuListItem">About</Link>

                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-180} duration ={500}className="desktopMenuListItem">Portfolio</Link>

                <Link activeClass="active" to="accomplishments" spy={true} smooth={true} offset={-180} duration ={500}className="desktopMenuListItem">Accomplishments</Link>

            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <FontAwesomeIcon icon={faEnvelope} className="desktopMenuImg"/>
                Contact Me
            </button>
        </nav>
    );
};

export default Navbar;