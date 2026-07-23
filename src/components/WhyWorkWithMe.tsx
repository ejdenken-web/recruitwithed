function WhyWorkWithMe() {
  const values = [
    {
      title: "Strategic Talent Acquisition",
      description:
        "Supporting organizations by identifying, engaging, and connecting with exceptional technology professionals through targeted sourcing strategies, market research, and relationship-driven recruiting.",
    },
    {
      title: "AI-Assisted Recruiting",
      description:
        "Using modern AI tools including ChatGPT, Claude and DeepSeek to enhance research, sourcing, content creation, and recruiting workflows while maintaining a human-centered hiring approach.",
    },
    {
      title: "Continuous Learning",
      description:
        "Committed to professional growth through industry-recognized certifications, emerging AI technologies, and modern recruiting practices that improve both candidate and hiring manager experiences.",
    },
  ];

  return (
    <section
      id="why-work-with-me"
      style={{
        background: "#0B1120",
        color: "white",
        padding: "90px 40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          fontSize: "2.6rem",
          marginBottom: "20px",
        }}
      >
        Why Work With Me
      </h2>

      <p
        style={{
          maxWidth: "850px",
          margin: "0 auto 50px",
          color: "#CBD5E1",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        I combine recruiting experience, AI-assisted workflows, and continuous
        professional development to deliver an efficient, thoughtful, and
        candidate-focused recruiting experience.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {values.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#1E293B",
              padding: "30px",
              borderRadius: "15px",
              border: "1px solid #334155",
              transition: "0.3s ease",
            }}
          >
            <h3
              style={{
                color: "#38BDF8",
                marginBottom: "18px",
                fontSize: "22px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.8",
                fontSize: "16px",
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

export default WhyWorkWithMe;