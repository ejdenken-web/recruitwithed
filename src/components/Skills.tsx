import "./Skills.css";

function Skills() {
  const skills = [
    "Technology Recruiting",
    "Executive Search",
    "AI-Assisted Recruiting",
    "Boolean Search",
    "Talent Mapping",
    "Candidate Sourcing",
    "LinkedIn Recruiter",
    "Market Intelligence",
    "Recruitment Strategy",
    "Stakeholder Management",
    "Team Leadership",
    "Recruiting Operations",
    "ATS",
    "Talent Acquisition",
    "Candidate Engagement",
    "Negotiation",
  ];

  return (
    <section className="skills">

      <div className="container">

        <span className="section-tag">
          EXPERTISE
        </span>

        <h2 className="section-title">
          Core Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill) => (

            <div
              key={skill}
              className="skill-pill"
            >
              {skill}
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;