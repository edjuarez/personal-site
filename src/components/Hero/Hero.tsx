import "./Hero.css";
import { Terminal } from "../Terminal/Terminal";
import {
  FiGithub,
  FiDownload
} from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
export const Hero = () => {
  return (
    <>
      <section id="home" className="hero">

        {/* LEFT SIDE */}

        <div className="hero-left">

          <h1 className="hero-title">
           Eduardo
          </h1>

          <h2 className="hero-subtitle">
            {/* <span style={{ color: "#027b79" }}>Web</span>, <span style={{ color: "#8e06b3" }}>Roku</span> & <span style={{ color: "#b18706" }}>Game</span> Developer | Frontend Engineer */}
            Frontend Engineer
          </h2>

          <p className="hero-description">
            I build websites, applications and interactive experiences with a focus on quality and user experience.
          </p>

          {/* ICONS */}

          {/* <div className="hero-socials">

            <a
              href="https://github.com/"
              target="_blank"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
            >
              Contact
            </a>

          </div> */}
<div className="hero-buttons">

  <a
    href="https://github.com/"
    target="_blank"
    className="hero-btn primary"
  >
    <FiGithub />
  </a>

  <a
    href="https://linkedin.com/"
    target="_blank"
    className="hero-btn secondary"
  >
    <FaLinkedin  />
  </a>

  <a
    href="#"
    className="hero-btn outline"
  >
    <FiDownload />
    <span>CV</span>
  </a>

</div>
        </div>

        {/* RIGHT SIDE */}

        <div className="hero-right">
          <Terminal />
        </div>

      </section>
    </>
  );
};