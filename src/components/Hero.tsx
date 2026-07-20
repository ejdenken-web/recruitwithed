function Hero() {
  return (
    <div
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
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#38BDF8", fontSize: "4rem" }}>
        RecruitWithEd
      </h1>

      <h2>Ed Johnson</h2>

      <h3>Senior Information Technology Recruiter</h3>

<p
  style={{
    color: "#38BDF8",
    fontWeight: "bold",
    fontSize: "20px",
    marginTop: "10px",
  }}
>
  Boolean Search Specialist | AI Recruiting Specialist
</p>

      <p style={{ maxWidth: "700px", color: "#CBD5E1", lineHeight: "1.8" }}>
        Connecting exceptional technology talent through AI-assisted recruiting,
        advanced Boolean search, and modern talent acquisition strategies.
      
      </p>

      <div style={{ marginTop: "40px" }}>
        <button
          style={{
            padding: "14px 28px",
            background: "#38BDF8",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          View Certifications
        </button>

        <button
          style={{
            padding: "14px 28px",
            background: "transparent",
            color: "white",
            border: "2px solid #38BDF8",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Lets connect
        </button>
      </div>
    </div>
  );
}

export default Hero;