import React, { useState } from 'react';
import './Navbar.css';
import logo from "./DM Logo.png";
import MobileMenuIcon from '../../util/MobileMenuIcon';


function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className='logo'>
        <a href="/react-page"> <img src={logo} alt="Logo" /></a>
      </div>
      <MobileMenuIcon onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
        <li><a href="/Resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
