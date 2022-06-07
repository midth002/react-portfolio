import React from 'react'; 
import './navbar.sass';

const Navbar = () => {
  return (
    <div><div className="container-fluid">
    <a className="navbar-brand logos" href="#">AM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex align-items-center ">
        <li><a href="#projects" className="underline text-white">Projects</a></li>
        <li><a href="#skills" className="underline text-white">Skills</a></li>
        <li><a href="#about-me" className="underline text-white">About Me</a></li>
        <li><a href="#contact-me" className="underline text-white">Contact Me</a></li>
        <li><a href="" class="btn resume text-white" download>Resume</a></li>
      </ul>
    </div>
  </div></div>
  )
}

export default Navbar;