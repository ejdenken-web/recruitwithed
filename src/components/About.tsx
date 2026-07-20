function About() {
  return (
    <section
      id="about"
      style={{
        background: "#111827",
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
          marginBottom: "35px",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          color: "#CBD5E1",
          lineHeight: "2",
          fontSize: "18px",
        }}
      >
        <p>
          I believe successful recruiting begins with trust, clear
          communication, and understanding the people behind every career
          decision.
        </p>

        <p style={{ marginTop: "24px" }}>
          I have built my career sourcing, engaging, and hiring top-tier
          technology professionals across a wide range of disciplines. I
          specialize in navigating competitive talent markets to connect
          software engineers, data professionals, cloud specialists,
          architects, and engineering leaders with rewarding career
          opportunities. My approach is built on data-driven sourcing,
          strategic talent mapping, transparent communication, and delivering
          consistent results.
        </p>

        <p style={{ marginTop: "24px" }}>
          RecruitWithEd reflects my journey of continuous learning, embracing
          emerging technologies, and sharing knowledge to help shape the future
          of modern talent acquisition.
        </p>
      </div>
    </section>
  );
}

export default About;