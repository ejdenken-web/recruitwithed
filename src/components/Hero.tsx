function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(135deg, #0F172A, #111827)",
        color: "white",
        padding: "140px 30px 110px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#38BDF8",
            fontSize: "20px",
            fontWeight: "700",
            letterSpacing: "2px",
            marginBottom: "18px",
          }}
        >
          RecruitWithEd
        </p>

        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            marginBottom: "18px",
          }}
        >
          Ed Johnson
        </h1>

        <h2
          style={{
            color: "#38BDF8",
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Senior Information Technology Consultant | AI Recruiting
        </h2>

        <p
          style={{
            color: "#E2E8F0",
            fontSize: "22px",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Building meaningful connections, delivering exceptional talent.
        </p>
      </div>
    </section>
  );
}

export default Hero;