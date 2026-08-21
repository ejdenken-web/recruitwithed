import "./Projects.css";

function Projects() {
  const projects = [
    {
      
      title: "RecruitWithEd",
      description:
        "A professional recruiting portfolio focused on technology recruiting, talent acquisition, candidate engagement, and modern recruiting practices.",
      
    },
    {
      
      title: "Chhota Bheem",
      description:
        "Animation and creative portfolio work connected to the Chhota Bheem project, showcasing artistic and production contributions.",
      
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
              key={project.title}
            >
              

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;