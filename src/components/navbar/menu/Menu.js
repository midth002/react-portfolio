import "./menu.scss"
import { Link } from 'react-scroll';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <Link to="header" 
                    onClick={() => setMenuOpen(false)}
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="skills"
                     onClick={() => setMenuOpen(false)}
                     >
                     Skills
                     </Link>
                </li>
                <li>
                    <Link to="projects" 
                    onClick={() => setMenuOpen(false)}
                    >Projects
                    </Link>
                </li>
                <li >
                    <Link 
                    to="about-me"
                    onClick={() => setMenuOpen(false)}
                    >
                    About
                    </Link>
                </li>
                <li >
                    <Link to="contact-me" 
                    onClick={() => setMenuOpen(false)}
                    >
                    Contact
                    </Link>
                </li>
            </ul>

           

        </div>
    )
}