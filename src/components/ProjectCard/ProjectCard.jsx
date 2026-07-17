import "./ProjectCard.css";

import {
  FiPlay,
  FiGlobe,
  FiCode,
  FiMonitor,
  FiLayers,
  FiGithub
} from "react-icons/fi";

import {
  useEffect,
  useRef
} from "react";

const ProjectCard = ({
  project,
  expanded,
  onToggle
}) => {

  const cardRef = useRef(null);

  /* ========================= */
  /* AUTO SCROLL */
  /* ========================= */

  useEffect(() => {

    if (
      expanded &&
      cardRef.current
    ) {

      setTimeout(() => {

        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }, 120);

    }

  }, [expanded]);

  /* ========================= */
  /* TECH ICON */
  /* ========================= */

  const renderTechIcon = (tech) => {

    switch (tech.toLowerCase()) {

      case "react":
        return <FiCode />;

      case "vite":
        return <FiMonitor />;

      case "css":
        return <FiLayers />;

      default:
        return <FiCode />;
    }

  };

  return (

    <div
      ref={cardRef}
      className={
        expanded
          ? "project-card expanded"
          : "project-card"
      }
    >

      {/* ========================= */}
      {/* IMAGE */}
      {/* ========================= */}

      <div className="project-image-wrapper">

        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

      </div>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <div className="project-content">

        {/* TITLE */}

        <h3>
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p>
          {project.description}
        </p>

        {/* ========================= */}
        {/* TECH */}
        {/* ========================= */}

        <div className="project-tech">

          {project.technologies.map(
            (tech) => (

              <span key={tech}>

                {renderTechIcon(tech)}

                {tech}

              </span>

            )
          )}

        </div>

        {/* ========================= */}
        {/* BUTTONS */}
        {/* ========================= */}




        <div className="project-actions">
        {/* GITHUB */}

        {project.githubUrl && (

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card-button github-link"
          >
            <FiGithub />
            GitHub
          </a>

        )}
          {/* PLAY */}

          {project.playable && (

            <a
              href={project.gameUrl}
              target="_blank"
              rel="noreferrer"
              className="project-btn primary"
            >

              <FiPlay />

              Play

            </a>

          )}

        </div>

        {/* ========================= */}
        {/* EXPANDED CONTENT */}
        {/* ========================= */}

        {expanded && (

          <div className="expanded-content">

            {/* LONG DESCRIPTION */}

            <p className="expanded-description">

              {project.longDescription}

            </p>

            {/* GAME */}

            {project.playable && (

              <iframe
                src={project.gameUrl}
                className="game-frame"
                title={project.title}
              />

            )}

            {/* GITHUB */}

            {project.githubUrl && (

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >

                <FiGithub />

                GitHub Repository

              </a>

            )}

          </div>

        )}

      </div>

    </div>

  );

};

export default ProjectCard;