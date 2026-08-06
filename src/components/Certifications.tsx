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
        "Autonomous Agent Improvement with LangSmith Engine",
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
        "Recruitment Analytics Professional Certification",
        "Candidate Sourcing Certification",
        "Recruitment Automation Certification",
        "Executive Search Specialist Certification",
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
    <section
      id="certifications"
      className="certifications-section"
    >

      <div className="certifications-container">

        <span className="section-tag">
          CERTIFICATIONS
        </span>

        <div className="certification-grid">

          {certificationGroups.map((group) => (

            <div
              key={group.provider}
              className="provider-card"
            >

              <h3>
                {group.provider}
              </h3>

              <div className="cert-list">

                {group.certifications.map((cert) => (

                  <div
                    key={cert}
                    className="cert-item"
                  >
                    {cert}
                  </div>

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