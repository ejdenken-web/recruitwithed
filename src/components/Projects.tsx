import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "RecruitWithEd",
      category: "Recruiting Portfolio",
      description:
        "Designed and developed a modern recruiting portfolio showcasing recruiting expertise, AI certifications, enterprise clients, featured projects, and technology capabilities using React and TypeScript.",
      stack: "React • TypeScript • Vite • GitHub • Netlify",
      status: "LIVE WEBSITE",
    },
    {
      title: "Chhota Bheem Portfolio",
      category: "Creative Portfolio",
      description:
        "Designed and developed a professional portfolio for an animation artist who contributed to the Chhota Bheem franchise. Created with Claude AI assistance using a modern responsive design.",
      stack: "React • TypeScript • Claude AI • Netlify",
      status: "AVAILABLE UPON REQUEST",
    },
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="projects-header">

        <p className="section-tag">FEATURED WORK</p>

        <h2>Selected Projects</h2>

        <p>
          A selection of portfolio projects demonstrating recruiting,
          branding, web development, and AI-assisted workflows.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.title}>

            <div className="project-top">

              <span className="project-category">
                {project.category}
              </span>

              <div className="project-status">
                {project.status}
              </div>

            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-stack">
              {project.stack}
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;