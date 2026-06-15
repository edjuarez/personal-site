import "./MyWork.css";

import { useState } from "react";

import ProjectCard from "../ProjectCard/ProjectCard.jsx";

import { projects } from "../../data/projects.js";

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
        Selected Projects
      </h2>

      <p className="about-description general-description">
        This section is currently a work in progress. At the moment it only includes academic game development projects from my university studies.
      </p>

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