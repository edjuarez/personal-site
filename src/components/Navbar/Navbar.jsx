import "./Navbar.css";
import { useState } from "react";
export const Navbar = () => {

    const [value, setValue] = useState(0);

    function count() {
        setValue((prevValue) => prevValue + 1)
    }

    return(

 <header className="navbar">

      <nav className="navbar-links">

        <a href="#home">
          Home
        </a>

        <a href="#about">
          About Me
        </a>

        <a href="#work">
          My Work
        </a>

        <a href="#contact">
          Contact
        </a>

      </nav>

    </header>

    )
}