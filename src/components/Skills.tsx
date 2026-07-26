import "./Skills.css";

function Skills() {
  const skills = [
    "Technology Recruiting",
    "AI-Assisted Recruiting",
    "Executive Search",
    "Strategic Talent Acquisition",
    "Boolean Search",
    "Talent Mapping",
    "Candidate Sourcing",
    "Recruitment Operations",
    "ATS Management",
    "Recruiting Analytics",
    "Employer Branding",
    "Market Intelligence",
  ];

  return (
    <section className="skills-section">

      <div className="skills-header">

        <span className="section-tag">
          EXPERTISE
        </span>

        <h2>
          Core Expertise
        </h2>

        <p>
          Areas where I help organizations identify, attract, and hire exceptional talent.
        </p>

      </div>

      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            key={skill}
            className="skill-card"
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;