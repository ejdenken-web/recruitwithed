import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "RecruitWithEd",
      description:
        "A professional recruiting portfolio focused on technology recruiting, talent acquisition, candidate engagement, and modern recruiting practices.",
      tags: [
        "Recruiting",
        "Talent Acquisition",
        "Professional Portfolio",
      ],
    },
    {
      number: "02",
      title: "Chhota Bheem",
      description:
        "Animation and creative portfolio work connected to the Chhota Bheem project, showcasing artistic and production contributions.",
      tags: [
        "Animation",
        "Creative Work",
        "Portfolio",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        <div className="projects-header">
          <span className="section-tag">
            PROJECTS
          </span>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p>
            Selected professional and creative projects
            representing recruiting, technology, and portfolio
            development work.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <span className="project-number">
                {project.number}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;