import "./Certifications.css";

function Certifications() {
  const certificationGroups = [
    {
      provider: "Anthropic",
      certifications: [
        "Claude 101",
        "Claude Platform 101",
        "Introduction to Agent Skills",
        "Introduction to Claude Cowork",
        "Introduction to Subagents",
        "AI Capabilities and Limitations",
        "AI Fluency Framework & Foundations",
      ],
    },
    {
      provider: "LangChain",
      certifications: [
        "Introduction to LangGraph – Python",
        "Introduction to LangSmith Deployment",
      ],
    },
    {
      provider: "Microsoft",
      certifications: [
        "Use AI for Everyday Tasks",
        "Explore Internet Search and Beyond",
      ],
    },
    {
      provider: "LinkedIn",
      certifications: [
        "AI-Driven Excellence – LinkedIn Hiring Assistant Assessment",
        "Recruiter Assessment",
      ],
    },
    {
      provider: "NextInHR",
      certifications: [
        "AI-Powered Recruiter Certification",
        "Talent Acquisition Certification",
        "Executive Search Specialist Certification",
        "Candidate Sourcing Certification",
        "Recruitment Analytics Professional Certification",
        "Recruitment Automation Certification",
        "ATS & Talent Acquisition Expert Certification",
        "Recruiting CRM Specialist Certification",
        "Multilingual Recruitment Specialist Certification",
        "DEI Hiring Certification",
      ],
    },
    {
      provider: "SalaryBox",
      certifications: [
        "Advanced Recruitment Strategies",
      ],
    },
  ];

  return (
    <section id="certifications">

      <div className="certifications-container">

        <div className="certifications-title">

          <h2>Professional Certifications</h2>

          <p>
            Continuous learning has been central to my recruiting journey.
            These certifications reflect my commitment to AI, strategic sourcing,
            talent acquisition, and modern recruiting technologies.
          </p>

        </div>

        <div className="certification-grid">

          {certificationGroups.map((group) => (

            <div
              className="provider-card"
              key={group.provider}
            >

              <h3>{group.provider}</h3>

              <div className="cert-list">

                {group.certifications.map((cert) => (

                  <span
                    className="cert-item"
                    key={cert}
                  >
                    {cert}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;