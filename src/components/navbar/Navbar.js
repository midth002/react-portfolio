import React, { useEffect, useState } from 'react'; 
import './navbar.scss';
import resume from '../../assets/resume/Resume.pdf';
import Hamburger from './hamburger/Hamburger';
import Menu from './menu/Menu.js';
import logo from '../../assets/icons/AM.png';
import { Link } from 'react-scroll';
import { Button } from '@mui/material';
import { Article } from "@mui/icons-material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const [navbar, setNavbar] = useState(false)


  const changeBackground = () => {

    if (window.scrollY >= 200) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  }, [])
  
  return (
    <>
    <div className={navbar ? "navbar navbar-expand-lg position-fixed w-100 active" : "navbar navbar-expand-lg position-fixed w-100"}>

    <div className="container-fluid">
    <Link to="header" className="navbar-brand logos" activeClass="active" spy={true} smooth={true} offset={0} duration={1500} delay={500}><img src={logo} alt="logo"/></Link>
   
    <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex align-items-center ">
        <li><Link to="projects" className="underline text-white" activeClass="active"  spy={true} smooth={true} offset={-100} duration={1500} delay={500}>Projects</Link></li>
        <li><Link to="skills" className="underline text-white" activeClass="active" spy={true} smooth={true} offset={-100} duration={1500} delay={500}>Skills</Link></li>
        <li><Link to="about-me" className="underline text-white" activeClass="active" spy={true} smooth={true} offset={-50} duration={1500} delay={500}>About Me</Link></li>
        <li><Link activeClass="active" className="underline text-white" to="contact-me" spy={true} smooth={true} offset={-50} duration={1500} delay={500}>Contact Me</Link></li>
        
        <Button 
        href={resume} 
        target="_blank" 
        variant="contained"  
        startIcon={<Article />} 
        sx={{ 
          bgcolor: '#233554', 
          '&:hover' : {
              bgcolor: '#3bd3b0'
           }
        }}>
        Resume
        </Button>
      </ul>
    </div>
  </div>
  </div>
  <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
  </>
  )
}

export default Navbar;