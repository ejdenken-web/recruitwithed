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
        "Using modern AI tools including ChatGPT, Claude, and DeepSeek to enhance research, sourcing, content creation, and recruiting workflows while maintaining a human-centered hiring approach.",
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
        padding: "clamp(70px, 10vw, 90px) 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          fontSize: "clamp(2rem, 5vw, 2.6rem)",
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
          fontSize: "clamp(16px, 2vw, 18px)",
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
          gap: "30px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {values.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#1E293B",
              padding: "35px 30px",
              borderRadius: "16px",
              border: "1px solid #334155",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            }}
          >
            <h3
              style={{
                color: "#38BDF8",
                marginBottom: "18px",
                fontSize: "clamp(20px, 3vw, 22px)",
                lineHeight: "1.4",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.9",
                fontSize: "clamp(15px, 2vw, 16px)",
                margin: 0,
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