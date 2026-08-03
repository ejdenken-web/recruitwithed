import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "RecruitWithEd",
      category: "Recruiting Portfolio",
      description:
        "A modern personal brand website built to showcase recruiting experience, client partnerships, professional certifications, featured work, and continuous learning.",
      stack:
        "React • TypeScript • Vite • CSS3 • GitHub • Vercel • Netlify • Claude AI • ChatGPT",
      status: "LIVE WEBSITE",
    },
    {
      title: "Chhota Bheem Live Animation Portfolio",
      category: "Animation Portfolio",
      description:
        "A creative portfolio website designed and developed for a 2D animator and background artist, showcasing artwork, animation experience, visual storytelling, and production contributions to the Chhota Bheem animated television series.",
      stack:
        "Animation Portfolio • Character Design • Background Art • Creative Direction • AI",
      status: "LIVE ANIMATION",
      animation: true,
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
          A selection of projects showcasing recruiting technology,
          personal branding, creative portfolios, web development,
          and AI-assisted workflows.
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


            {project.animation && (

              <a
                href="/chhota-bheem-animation"
                className="animation-button"
              >
                View Live Animation
              </a>

            )}


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