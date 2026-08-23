import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "RecruitWithEd",
      label: "PROFESSIONAL",
      description:
        "A professional recruiting portfolio focused on technology recruiting, talent acquisition, candidate engagement, and modern recruiting practices.",
    },
    {
      title: "Chhota Bheem",
      label: "CREATIVE",
      description:
        "Animation and creative portfolio work connected to the Chhota Bheem project, showcasing artistic and production contributions.",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-glow projects-glow-one" />
      <div className="projects-glow projects-glow-two" />

      <div className="projects-container">
        <div className="projects-header">
          <span className="section-tag">PROJECTS</span>

          <h2>
            Selected
            <span> Work.</span>
          </h2>

          <p>
            Professional and creative work representing different
            sides of my experience.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-card-${index + 1}`}
              key={project.title}
            >
              <div className="project-card-top">
                <span>{project.label}</span>

                <span className="project-arrow">
                  ↗
                </span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>

              <div className="project-card-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;