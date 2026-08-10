import "./Projects.css";

function Projects() {

  const projects = [
    {
      title: "RecruitWithEd",
      type: "Professional Recruiting Portfolio",
      status: "LIVE",
      description:
        "Designed and developed a modern recruiting portfolio showcasing enterprise recruiting experience, AI certifications, client engagements, featured projects, and professional accomplishments.",

      stack: [
        "React",
        "TypeScript",
        "Vite" ,
        "HTML5" ,
        "CSS3",
        "Node.js" ,
        "npm" ,
        "React Hooks" ,
        "Component Based Architecture" ,
        "Responsive Design" ,
        "Git" ,
        "Glassmorphism UI" ,
        "Interactive UI" ,
        "ChatGPT",
        "Claude AI",
        "GitHub",
        "Netlify" ,
        "Vercel",
      ],
    },

    {
      title: "Chhota Bheem Animation Portfolio",
      type: "Creative Portfolio",
      status: "AVAILABLE UPON REQUEST",
      description:
        "Designed and developed a modern portfolio for a professional 2D Animator and Background Artist showcasing production work, artwork, animation projects, and creative storytelling.",

      stack: [
        "React",
        "TypeScript",
        "CSS",
        "Claude AI",
        "Netlify",
      ],
    },
  ];

  return (

    <section
      className="projects-section"
      id="projects"
    >

      <div className="projects-header">

        <span className="section-tag">
          FEATURED WORK
        </span>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.title}
          >

            <div className="project-top">

              <span className="project-category">
                {project.type}
              </span>

              <span className="project-status">
                {project.status}
              </span>

            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="pill-group">

              {project.stack.map((item) => (

                <span
                  className="tech-pill"
                  key={item}
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;