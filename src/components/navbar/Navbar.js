import React, { useEffect, useState } from 'react'; 
import './navbar.scss';
import resume from '../../assets/resume/resume-6-7-22.pdf';
import Hamburger from './hamburger/Hamburger';
import Menu from './menu/Menu.js';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <>
    <div className="navbar navbar-expand-lg position-fixed w-100">

    <div className="container-fluid">
    <a className="navbar-brand logos" href="#header">AM</a>
    <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex align-items-center ">
        <li><a href="#projects" className="underline text-white">Projects</a></li>
        <li><a href="#skills" className="underline text-white">Skills</a></li>
        <li><a href="#about-me" className="underline text-white">About Me</a></li>
        <li><a href="#contact-me" className="underline text-white">Contact Me</a></li>
        <li><a href={resume} className="btn resume btn-danger text-white" target="_blank">Resume</a></li>
      </ul>
    </div>
   
  </div>
  </div>
  <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  </>
  )
}

export default Navbar;