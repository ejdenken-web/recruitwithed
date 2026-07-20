function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#0B1120",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#38BDF8",
          fontSize: "4rem",
          marginBottom: "10px",
        }}
      >
        RecruitWithEd
      </h1>

      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "10px",
        }}
      >
        Ed Johnson
      </h2>

      <h3
        style={{
          fontWeight: "normal",
          color: "#E2E8F0",
          marginBottom: "20px",
        }}
      >
        Senior Information Technology Recruiter
      </h3>

      <p
        style={{
          color: "#38BDF8",
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "25px",
        }}
      >
        Boolean Search Specialist | AI Recruiting Specialist
      </p>

      <p
        style={{
          maxWidth: "760px",
          color: "#CBD5E1",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        Connecting exceptional technology talent through AI-assisted recruiting,
        advanced Boolean search, and modern talent acquisition strategies.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="#certifications"
          style={{
            padding: "14px 28px",
            background: "#38BDF8",
            color: "#0B1120",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          View Certifications
        </a>

        <a
          href="#contact"
          style={{
            padding: "14px 28px",
            background: "transparent",
            color: "white",
            textDecoration: "none",
            border: "2px solid #38BDF8",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
}

export default Hero;