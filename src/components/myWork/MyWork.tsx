import "./MyWork.css";

import ProjectCard from "../ProjectCard/ProjectCard";

import { projects } from "../../data/projects";

export const MyWork = () => {
  return (
    <>
      <div className="section-divider" />
      <section id="work" className="my-work">

        <div className="my-work-header">

          <p className="section-label">
            PORTFOLIO
          </p>

          <h2 className="my-work-title">
            My <span style={{ color: "#ff5f56" }}>Work</span>
          </h2>

          <p className="my-work-description">
            A collection of applications, games and
            frontend experiences I've built and worked on.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>
    </>
  );
};