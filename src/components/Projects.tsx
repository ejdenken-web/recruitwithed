function Projects() {
  const projects = [
    {
      title: "RecruitWithEd",
      subtitle: "Personal Recruiting Portfolio",
      description:
        "Designed and developed my personal recruiting portfolio using React, TypeScript, Vite, GitHub, and Vercel. This portfolio showcases my recruiting experience, AI certifications, organizations supported, featured projects, and modern AI-assisted recruiting approach.",
      technologies:
        "React • TypeScript • Vite • GitHub • Vercel",
      status: "🟢 Live Portfolio",
    },
    {
      title: "Chhota Bheem Animation Portfolio",
      subtitle: "Professional Portfolio Website",
      description:
        "Designed and developed a professional portfolio website for an animation professional who contributed to the Chhota Bheem franchise. Developed with Claude AI assistance to showcase artwork, experience, and career achievements in a clean, modern portfolio.",
      technologies:
        "React • TypeScript • Claude AI • Vercel",
      status: "Portfolio Available Upon Request",
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
          Selected projects that reflect my passion for recruiting, technology,
          AI-assisted workflows, and modern web development.
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
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>

              <h4
                style={{
                  color: "#E2E8F0",
                  fontWeight: "normal",
                  marginBottom: "20px",
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
                  marginBottom: "20px",
                }}
              >
                {project.technologies}
              </p>

              <div
                style={{
                  display: "inline-block",
                  background: "#0F172A",
                  color: "#22C55E",
                  border: "1px solid #22C55E",
                  borderRadius: "999px",
                  padding: "10px 18px",
                  fontWeight: "bold",
                }}
              >
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;