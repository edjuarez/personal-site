import "./MyWork.css";

import { useState } from "react";

import ProjectCard from "../ProjectCard/ProjectCard.jsx";

import { projects } from "../../data/projects";

export const MyWork = () => {

  const [expandedId, setExpandedId] =
    useState(null);

  return (

    <section
      id="work"
      className="my-work"
    >

      <span className="about-label general-label">
        Portfolio
      </span>

      <h2 className="about-title general-title">
        Some projects I've worked on...
      </h2>

      <div className="about-divider" />

      <div className="projects-grid">

        {projects.map((project) => (

          <ProjectCard
            key={project.id}

            project={project}

            expanded={
              expandedId === project.id
            }

            onToggle={() =>

              setExpandedId(

                expandedId === project.id
                  ? null
                  : project.id

              )

            }
          />

        ))}

      </div>

    </section>

  );

};