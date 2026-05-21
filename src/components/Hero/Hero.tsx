import "./Hero.css";

export const Hero = () => {
  return (
    <>  
      <section className="hero">
        <div className="hero-content">

          <h1 className="hero-title">
            Eduardo!!
          </h1>

          <h2 className="hero-subtitle">
            Frontend Developer & QA Engineer
          </h2>

          <p className="hero-tagline">
            I build interfaces, fix bugs and improve
            quality for real-world products.
          </p>

          <div className="hero-buttons">

            <a
              href="https://github.com/"
              target="_blank"
              className="hero-btn primary"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hero-btn secondary"
            >
              LinkedIn
            </a>

            <a
              href="#"
              target="_blank"
              className="hero-btn outline"
            >
              CV
            </a>

          </div>
        </div>
      </section>
    </>
  );
};