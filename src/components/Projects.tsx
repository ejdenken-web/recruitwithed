function Projects() {
  const projects = [
    {
      title: "RecruitWithEd",
      subtitle: "Personal Recruiting Portfolio",
      description:
        "Designed and developed my personal recruiting portfolio using React, TypeScript, Vite, and Netlify. The portfolio showcases my recruiting experience, AI certifications, organizations supported, technical expertise, and modern talent acquisition approach.",
      technologies:
        "React • TypeScript • Vite • Netlify • GitHub",
      status: "Live",
      link: "https://recruitwithed.netlify.app/",
    },
    {
      title: "Chhota Bheem Animation Portfolio",
      subtitle: "Professional Portfolio Website",
      description:
        "Designed and developed a professional portfolio website for an animation professional who contributed to the Chhota Bheem franchise. The project was created with assistance from Claude AI and focused on presenting artwork, experience, and achievements in a modern portfolio format.",
      technologies:
        "React • TypeScript • Claude AI • Netlify",
      status: "Available Upon Request",
      link: "",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "#111827",
        color: "white",
        padding: "90px 40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#38BDF8",
            textAlign: "center",
            fontSize: "2.6rem",
            marginBottom: "20px",
          }}
        >
          Featured Projects
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#CBD5E1",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "850px",
            margin: "0 auto 60px",
          }}
        >
          A selection of portfolio projects demonstrating my interest in
          recruiting, technology, AI-assisted workflows, and modern web
          development.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                background: "#1E293B",
                border: "1px solid #334155",
                borderRadius: "14px",
                padding: "30px",
              }}
            >
              <h3
                style={{
                  color: "#38BDF8",
                  marginBottom: "10px",
                  fontSize: "24px",
                }}
              >
                {project.title}
              </h3>

              <h4
                style={{
                  color: "#E2E8F0",
                  marginBottom: "20px",
                  fontWeight: "normal",
                }}
              >
                {project.subtitle}
              </h4>

              <p
                style={{
                  color: "#CBD5E1",
                  lineHeight: "1.8",
                  marginBottom: "20px",
                }}
              >
                {project.description}
              </p>

              <p
                style={{
                  color: "#38BDF8",
                  fontWeight: "bold",
                  marginBottom: "12px",
                }}
              >
                {project.technologies}
              </p>

              <p
                style={{
                  color: "#94A3B8",
                  fontWeight: "bold",
                  marginBottom: "25px",
                }}
              >
                Status: {project.status}
              </p>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#38BDF8",
                    color: "#0F172A",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  View Live Project
                </a>
              ) : (
                <span
                  style={{
                    display: "inline-block",
                    background: "#334155",
                    color: "#CBD5E1",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                >
                  Available Upon Request
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;