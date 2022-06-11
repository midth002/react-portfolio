import React from 'react'; 
import './navbar.scss';


const Navbar = () => {
  return (


    <div className="navbar navbar-expand-lg position-fixed w-100">

    <div className="container-fluid">
    <a className="navbar-brand logos" href="#">AM</a>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex align-items-center ">
        <li><a href="#projects" className="underline text-white">Projects</a></li>
        <li><a href="#skills" className="underline text-white">Skills</a></li>
        <li><a href=".about-me" className="underline text-white">About Me</a></li>
        <li><a href="#contact-me" className="underline text-white">Contact Me</a></li>
        <li><button className="btn resume btn-danger text-white" download>Resume</button></li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default Navbar;