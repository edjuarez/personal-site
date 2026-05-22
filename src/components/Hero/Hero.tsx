import "./Hero.css";
import { Terminal } from "../Terminal/Terminal";

export const Hero = () => {
  return (
    <section className="hero">

      {/* LEFT SIDE */}

      <div className="hero-left">

        <p className="hero-label">
          FRONTEND DEVELOPER
        </p>

        <h1 className="hero-title">
          Eduardo
        </h1>

        <h2 className="hero-subtitle">
          Frontend Developer & QA Engineer
        </h2>

        <p className="hero-description">
          I build interfaces, fix bugs and create
          polished user experiences for real-world
          products.
        </p>

        {/* ICONS */}

        <div className="hero-socials">

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

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">
        <Terminal />
      </div>

    </section>
  );
};