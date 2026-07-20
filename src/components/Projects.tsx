function Projects() {
  const projects = [
    {
      title: "🚀 RecruitWithEd",
      subtitle: "AI-Powered Recruiting Initiative",
      description:
        "RecruitWithEd showcases how I integrate Artificial Intelligence into modern talent acquisition by combining advanced sourcing strategies, technical recruiting expertise, workflow optimization, and AI-powered research to improve recruiting efficiency and candidate engagement.",
      highlights: [
        "Claude AI",
        "ChatGPT",
        "Microsoft Copilot",
        "DeepSeek",
        "Perplexity AI",
        "Google AI",
      ],
      technologies:
        "React • TypeScript • GitHub • AI-Assisted Development",
      status: "🟢 Continuously Evolving",
    },

    {
      title: "🎬 Animation Portfolio Website",
      subtitle: "Case Study | Professional Portfolio Development",
      description:
        "Designed and developed a modern, responsive portfolio website for an animation professional associated with productions within the Chhota Bheem animation franchise. The project transformed years of creative work into a polished digital presence using modern web technologies and AI-assisted development.",
      highlights: [
        "Portfolio Planning",
        "React Development",
        "TypeScript",
        "Claude AI",
        "GitHub",
        "Netlify",
      ],
      technologies:
        "React • TypeScript • HTML5 • CSS3 • GitHub • Netlify",
      status:
        "🟢 Live | Portfolio link available upon request to respect client privacy.",
    },

    {
      title: "💼 Professional Recruiting Portfolio",
      subtitle: "Personal Branding Website",
      description:
        "Designed and developed my personal recruiting portfolio to showcase over 10 years of experience in technical recruiting, leadership, AI certifications, global hiring expertise, and AI-assisted development projects.",
      highlights: [
        "React",
        "TypeScript",
        "Responsive Design",
        "Professional Branding",
        "Netlify",
        "Claude AI",
      ],
      technologies:
        "React • TypeScript • GitHub • Netlify",
      status: "🟢 Live",
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
            fontSize: "2.6rem",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Featured Projects
        </h2>

        <p
          style={{
            color: "#CBD5E1",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "0 auto 60px",
          }}
        >
          A selection of AI-assisted recruiting initiatives, web development
          projects, and portfolio case studies demonstrating my expertise in
          talent acquisition, AI adoption, and modern web development.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                background: "#1E293B",
                borderRadius: "16px",
                padding: "30px",
                border: "1px solid #334155",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
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
                  marginBottom: "25px",
                }}
              >
                {project.description}
              </p>

              <h4
                style={{
                  color: "#38BDF8",
                  marginBottom: "15px",
                }}
              >
                Highlights
              </h4>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "25px",
                }}
              >
                {project.highlights.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "#0F172A",
                      color: "#E2E8F0",
                      padding: "8px 12px",
                      borderRadius: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p
                style={{
                  color: "#CBD5E1",
                  lineHeight: "1.7",
                }}
              >
                <strong style={{ color: "#38BDF8" }}>
                  Technologies
                </strong>
                <br />
                {project.technologies}
              </p>

              <p
                style={{
                  marginTop: "20px",
                  color: "#22C55E",
                  fontWeight: "bold",
                }}
              >
                {project.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;