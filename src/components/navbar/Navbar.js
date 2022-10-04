import React, { useEffect, useState } from "react";
import "./navbar.scss";

import Hamburger from "./hamburger/Hamburger";
import Menu from "./menu/Menu.js";
import logo from "../../assets/icons/AM.webp";
import { Link } from "react-scroll";
import { Button, Box } from "@mui/material";
import { Article } from "@mui/icons-material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [navbar, setNavbar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);




  const getScreenSize = () => {
    setWidth(window.innerWidth);
  };

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();

    // Call handler right away so state gets updated with initial window size
    window.addEventListener("resize", getScreenSize);

    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <Box
        className={
          navbar
            ? "navbar active-nav"
            : "navbar"
        }
      >
        <Box className="container-fluid">
      

          
          <Link
            to="header"
            className="navbar-brand logos"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
            delay={500}
          >
        
            <img src={logo} alt="logo" />
          
          </Link>

          

          {width < 900 ? (
            <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          ) : (
            <Box className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav d-flex align-items-center ">
                <li>
                  <Link
                    to="projects"
                    className="underline text-white"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1500}
                    delay={500}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    className="underline text-white"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1500}
                    delay={500}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="about-me"
                    className="underline text-white"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1500}
                    delay={500}
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="underline text-white"
                    to="contact-me"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1500}
                    delay={500}
                  >
                    Contact Me
                  </Link>
                </li>

                <Button
                  href="Resume.pdf"
                  target="_blank"
                  variant="contained"
                  startIcon={<Article />}
                  sx={{
                    bgcolor: "#233554",
                    "&:hover": {
                      bgcolor: "#3bd3b0",
                    },
                  }}
                >
                  Resume
                </Button>
              </ul>
            </Box>
          )}
        </Box>
      </Box>
      <Menu menuOpen={menuOpen} />
    </>
  );
};

export default Navbar;
