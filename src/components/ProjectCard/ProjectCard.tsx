

import "./ProjectCard.css";

export default function ProjectCard({
  project,
}: Props) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">
        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-description">
          {project.description}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          {project.buttonText}
        </a>
      </div>
    </article>
  );
}