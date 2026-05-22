import "./ProjectCard.css";

// import type { Project } from "../../types/Project";

// interface Props {
//   project: Project;
// }

export default function ProjectCard({
  project,
}: Props) {
  return (
    <article className="project-card">

      <div className="project-image-wrapper">

        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

      </div>

      <div className="project-content">

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* TAGS */}

        <div className="project-tags">

          {/* {project.tags.map((tag) => (
            <span
              key={tag}
              className="project-tag"
            >
              {tag}
            </span>
          ))} */}

        </div>

        {/* BUTTON */}

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-button"
        >
          View Project
        </a>

      </div>

    </article>
  );
}