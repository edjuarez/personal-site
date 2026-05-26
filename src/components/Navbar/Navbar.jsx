import "./Navbar.css";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <header className="navbar">

      {/* <div className="navbar-logo">
        EJ
      </div> */}

      {/* MOBILE BUTTON */}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {
          menuOpen
            ? <FiX />
            : <FiMenu />
        }
      </button>

      {/* LINKS */}

      <nav
        className={
          menuOpen
            ? "navbar-links active"
            : "navbar-links"
        }
      >

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About Me
        </a>

        <a href="#work" onClick={closeMenu}>
          My Work
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

    </header>
  );
};