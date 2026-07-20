function Certifications() {
  const certificationGroups = [
    {
      provider: "🤖 Anthropic",
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
      provider: "🔗 LangChain",
      certifications: [
        "Introduction to LangGraph – Python",
        "Introduction to LangSmith Deployment",
      ],
    },
    {
      provider: "💻 Microsoft",
      certifications: [
        "Use AI for Everyday Tasks",
        "Explore Internet Search and Beyond",
      ],
    },
    {
      provider: "💼 LinkedIn",
      certifications: [
        "AI-Driven Excellence – LinkedIn Hiring Assistant Assessment",
        "Recruiter Assessment",
      ],
    },
    {
      provider: "🎯 NextInHR",
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
      provider: "📈 SalaryBox",
      certifications: [
        "Advanced Recruitment Strategies",
      ],
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        background: "#0F172A",
        color: "white",
        padding: "80px 30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#38BDF8",
            fontSize: "2.5rem",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Professional Certifications
        </h2>

        <p
          style={{
            color: "#CBD5E1",
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "0 auto 50px",
          }}
        >
          Continuous learning across Artificial Intelligence, Technical
          Recruiting, Talent Acquisition, Candidate Sourcing, Recruitment
          Analytics, Automation, and modern hiring technologies.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
          }}
        >
          {certificationGroups.map((group) => (
            <div
              key={group.provider}
              style={{
                background: "#111827",
                borderRadius: "16px",
                padding: "30px",
                border: "1px solid #1F2937",
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              }}
            >
              <h3
                style={{
                  color: "#38BDF8",
                  fontSize: "22px",
                  marginBottom: "20px",
                }}
              >
                {group.provider}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {group.certifications.map((cert) => (
                  <span
                    key={cert}
                    style={{
                      background: "#1E293B",
                      color: "#E2E8F0",
                      padding: "8px 12px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      lineHeight: "1.4",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <p
                style={{
                  marginTop: "20px",
                  color: "#64748B",
                  fontSize: "14px",
                }}
              >
                {group.certifications.length} certifications completed
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
