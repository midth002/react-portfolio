import { useState } from 'react';
import "./menu.scss";
import { Link } from "react-scroll";
import { Button, Box } from "@mui/material";
import { Article, Close, Menu } from "@mui/icons-material";


export default function Drawer() {

  const [openMenu, setMenuOpen] = useState(false);


  return (


     
    <Box sx={{ display: 'flex', justifyContent: 'end', width: '80%', pr: 5}} className={openMenu && 'active' }>

    
<Box sx={{
      display: 'fixed',
      top: 5,
      left: '50%'
    }} >
      <Menu 
       onClick={() => setMenuOpen(!openMenu)}
       sx={{
        cursor: 'pointer'
       }}
       />
    </Box>

    

    

    
    <Box className={"menu " + (openMenu && "active")}>
    <Box sx={{
      mt:5

    }}>
    <Close 
    onClick={() => setMenuOpen(!openMenu)} 
    sx={{
       
        cursor: 'pointer'
       }}

    />
    </Box>
      <ul>
        <li>
          <Link to="header" onClick={() => setMenuOpen(!openMenu)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" onClick={() => setMenuOpen(!openMenu)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" onClick={() => setMenuOpen(!openMenu)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about-me" onClick={() => setMenuOpen(!openMenu)}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact-me" onClick={() => setMenuOpen(!openMenu)}>
            Contact
          </Link>
        </li>
        <li>
          <Button
            href="Resume.pdf"
            target="_blank"
            variant="contained"
            startIcon={<Article />}
            sx={{
              bgcolor: "#3bd3b0",
              "&:hover": {
                color: "white!important",
              },
            }}
          >
            Resume
          </Button>
        </li>
      </ul>
    </Box>
    </Box>
  );
}
