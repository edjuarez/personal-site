import "./ProjectCard.css";

import {
  FiPlay,
  FiGlobe,
  FiCode,
  FiMonitor,
  FiLayers,
  FiChevronDown,
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

        cardRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }, 120);

    }

  }, [expanded]);

  /* ========================= */
  /* CATEGORY ICON */
  /* ========================= */

  const renderCategoryIcon = () => {

    switch (project.category) {

      case "Game":
        return <FiPlay />;

      case "Web":
        return <FiGlobe />;

      default:
        return <FiCode />;
    }
  };

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

        {/* CATEGORY */}

        {/* <div className="project-badge">

          {renderCategoryIcon()}

          <span>
            {project.category}
          </span>

        </div> */}

        {/* IMAGE */}

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

          {/* PLAY / VISIT */}

          {project.playable && (

            <a
              href={project.gameUrl}
              target="_blank"
              className="project-btn primary"
            >

              <FiPlay />

              Play

            </a>

          )}

          {/* DETAILS */}

          {/* <button
            className="project-btn secondary"
            onClick={onToggle}
          >

            <FiChevronDown
              className={
                expanded
                  ? "details-icon active"
                  : "details-icon"
              }
            />

            Details

          </button> */}

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