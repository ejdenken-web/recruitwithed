function CoreExpertise() {
  const expertise = [
    {
      title: "Technical Recruiting",
      description:
        "Specialized in sourcing and recruiting technology professionals across diverse domains and skill sets.",
    },
    {
      title: "Strategic Sourcing",
      description:
        "Building targeted sourcing strategies using Boolean search, X-Ray search, LinkedIn sourcing, and market research.",
    },
    {
      title: "Recruiting Operations",
      description:
        "Improving recruiting workflows, processes, team coordination, and operational efficiency.",
    },
    {
      title: "Team Leadership",
      description:
        "Leading recruiting teams, mentoring professionals, and creating collaborative high-performing environments.",
    },
    {
      title: "Talent Acquisition",
      description:
        "Partnering with organizations to identify, engage, and connect with exceptional talent.",
    },
    {
      title: "Professional Branding",
      description:
        "Helping professionals build strong personal brands through portfolios, technology, and continuous learning.",
    },
  ];

  return (
    <section
      id="expertise"
      style={{
        background: "#0B1120",
        color: "white",
        padding: "80px 40px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          fontSize: "2.5rem",
          marginBottom: "40px",
        }}
      >
        Core Expertise
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {expertise.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1E293B",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3
              style={{
                color: "#38BDF8",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.7",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreExpertise;