import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#header">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about-me">About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact-me">Contact</a>
                </li>
            </ul>

        </div>
    )
}