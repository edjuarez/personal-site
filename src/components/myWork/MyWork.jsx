import "./MyWork.css";
import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import { projects } from "../../data/projects.js";

// Diccionario para mapear las claves del objeto a títulos legibles
const sectionTitles = {
  WEB: "Web Projects",
  GAME: "Game Development",
  // Puedes agregar más en el futuro: MOBILE: "Mobile Apps", etc.
};

export const MyWork = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="work" className="my-work">
      <span className="about-label general-label">
        Portfolio
      </span>

      <h2 className="about-title general-title">
        Selected Projects
      </h2>

      <p className="about-description general-description">
        Featured projects in web development and game design. I am actively expanding and updating this portfolio with new case studies.
      </p>

      <div className="about-divider" />

      {/* Renderizado dinámico de todas las categorías */}
      {Object.entries(projects).map(([category, items]) => (
        <div key={category} className="project-category-section">
          
          <h2 className="section-title">
            {sectionTitles[category] || category}
          </h2>
          
          <div className="projects-grid">
            {items.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                expanded={expandedId === project.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === project.id ? null : project.id
                  )
                }
              />
            ))}
          </div>
          
        </div>
      ))}
      
    </section>
  );
};