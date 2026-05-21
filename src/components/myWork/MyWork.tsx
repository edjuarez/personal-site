import ProjectCard from "../ProjectCard/projectCard";
import { projects } from "../../data/projects";

import "./MyWork.css";

export const MyWork = () => {
  return (
    <section
      className="my-work-section"
      id="my-work"
    >
      <h2 className="my-work-title">
        My Wossrk
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};