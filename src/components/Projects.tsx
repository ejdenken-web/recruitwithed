import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "RecruitWithEd",
      type: "Professional Recruiting Portfolio",
      description:
        "A modern personal brand website built to showcase recruiting experience, client partnerships, professional certifications, featured work, and continuous learning.",
      status: "LIVE",
    },
    {
      title: "Chhota Bheem Animation Portfolio",
      type: "Creative Portfolio",
      description:
        "A custom portfolio created for an animation professional showcasing contributions to the Chhota Bheem franchise with a clean, responsive presentation.",
      status: "Available Upon Request",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="projects-header">

        <span className="section-tag">
          FEATURED PROJECTS
        </span>

        <h2>
          Selected Work
        </h2>

        <p>
          A selection of personal projects focused on professional branding,
          portfolio development, and modern web experiences.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.title}
          >

            <div className="project-status">
              {project.status}
            </div>

            <h3>
              {project.title}
            </h3>

            <h4>
              {project.type}
            </h4>

            <p>
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;