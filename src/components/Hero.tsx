function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(135deg, #0F172A, #111827)",
        color: "white",
        padding: "clamp(90px, 12vw, 140px) 20px clamp(70px, 8vw, 110px)",
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
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "18px",
          }}
        >
          RecruitWithEd
        </p>

        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            margin: "0 0 18px",
            wordBreak: "break-word",
          }}
        >
          Ed Johnson
        </h1>

        <h2
          style={{
            color: "#38BDF8",
            fontSize: "clamp(1.3rem, 4vw, 2rem)",
            fontWeight: 600,
            lineHeight: 1.4,
            margin: "0 auto 22px",
            maxWidth: "850px",
          }}
        >
          Senior Information Technology Consultant | AI Recruiting
        </h2>

        <p
          style={{
            color: "#E2E8F0",
            fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
            fontWeight: 500,
            lineHeight: 1.7,
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Building meaningful connections, delivering exceptional talent.
        </p>
      </div>
    </section>
  );
}

export default Hero;