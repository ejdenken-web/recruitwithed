import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "RecruitWithEd",
      category: "Recruiting Portfolio",
      description:
        "A modern personal brand website showcasing recruiting expertise, client partnerships, professional certifications, featured work, and continuous learning through a clean, responsive user experience.",
      stack:
        "React • TypeScript • CSS • Responsive Design • Claude AI",
      status: "LIVE WEBSITE",
    },
    {
      title: "Chhota Bheem Animation Portfolio",
      category: "Creative Portfolio",
      description:
        "Designed and developed a responsive portfolio website for a professional 2D Animator and Background Artist, showcasing animation projects, background artwork, creative storytelling, and production experience through a modern, mobile-friendly user experience.",
      stack:
        "React • TypeScript • CSS • Responsive Design • Claude AI",
      status: "AVAILABLE UPON REQUEST",
    },
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="projects-header">

        <p className="section-tag">
          FEATURED WORK
        </p>

        <h2>
          Selected Projects
        </h2>

        <p>
          A selection of projects showcasing recruiting, branding, responsive web
          development, and AI-assisted workflows.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.title}
          >

            <div className="project-top">

              <span className="project-category">
                {project.category}
              </span>

              <div className="project-status">
                {project.status}
              </div>

            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="project-stack">
              <strong>Tech Stack:</strong><br />
              {project.stack}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;