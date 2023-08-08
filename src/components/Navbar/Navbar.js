import React from 'react';
import './Navbar.css';
import logo from "./DM Logo.png"

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <a href="/react-page"> <img src={logo} alt="Logo" /></a>
      </div>
      <ul className='nav-links'>
        <li><a href="#about" >About Me</a></li>
        <li><a href="#projects" >Projects</a></li>
        <li><a href="#contact" >Contact Me</a></li>
        <li><a href="/Resume">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
