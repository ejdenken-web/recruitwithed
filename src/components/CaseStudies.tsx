import "./CaseStudies.css";

function CaseStudies() {
  const studies = [
    {
      title: "RecruitWithEd",
      category: "Personal Brand",
      overview:
        "Designed and developed a modern recruiting website to showcase recruiting expertise, AI certifications, enterprise clients, featured projects, and professional branding.",
      outcome:
        "Created a professional online presence demonstrating recruiting capabilities, AI knowledge, and modern web technologies.",
      tech:
        "React • TypeScript • Vite • GitHub • Netlify",
    },
    {
      title: "Animation Portfolio",
      category: "Creative Portfolio",
      overview:
        "Designed and developed a portfolio website for an animation professional who contributed to the Chhota Bheem franchise using a modern responsive design.",
      outcome:
        "Delivered a professional portfolio that showcases artwork, experience, and career achievements in a clean and engaging format.",
      tech:
        "React • TypeScript • Claude AI • Netlify",
    },
  ];

  return (
    <section className="case-section">

      <div className="case-header">

        <span className="section-tag">
          CASE STUDIES
        </span>

        <h2>
          Selected Work
        </h2>

        <p>
          A selection of projects demonstrating recruiting,
          branding, portfolio development, and AI-assisted
          workflows.
        </p>

      </div>

      <div className="case-grid">

        {studies.map((study) => (

          <div
            className="case-card"
            key={study.title}
          >

            <span className="case-category">
              {study.category}
            </span>

            <h3>{study.title}</h3>

            <div className="case-block">

              <strong>Overview</strong>

              <p>{study.overview}</p>

            </div>

            <div className="case-block">

              <strong>Outcome</strong>

              <p>{study.outcome}</p>

            </div>

            <div className="case-tech">

              {study.tech}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CaseStudies;