import "./menu.scss";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
import { Article } from "@mui/icons-material";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <Link to="header" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="about-me" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact-me" onClick={() => setMenuOpen(false)}>
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
    </div>
  );
}
