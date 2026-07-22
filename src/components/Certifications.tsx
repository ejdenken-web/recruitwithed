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
            fontSize: "2.7rem",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Professional Certifications
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "30px",
          }}
        >
          {certificationGroups.map((group) => (
            <div
              key={group.provider}
              style={{
                background: "#111827",
                border: "1px solid #1F2937",
                borderRadius: "16px",
                padding: "30px",
                textAlign: "center",
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
              }}
            >
              <h3
                style={{
                  color: "#38BDF8",
                  fontSize: "22px",
                  marginBottom: "8px",
                }}
              >
                {group.provider}
              </h3>

              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "14px",
                  marginBottom: "22px",
                }}
              >
                {group.certifications.length} Certification
                {group.certifications.length > 1 ? "s" : ""}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {group.certifications.map((cert) => (
                  <span
                    key={cert}
                    style={{
                      background: "#1E293B",
                      color: "#E2E8F0",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      fontSize: "14px",
                      lineHeight: "1.5",
                      border: "1px solid #334155",
                    }}
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