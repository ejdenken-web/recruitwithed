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
          With over a decade of recruiting experience, I believe successful
          hiring begins with trust, meaningful conversations, and understanding
          the people behind every career decision.
        </p>

        <p style={{ marginTop: "24px" }}>
          Throughout my career, I have sourced, engaged, and recruited
          technology professionals across a wide range of industries and
          technologies. My experience includes identifying software engineers,
          cloud specialists, data professionals, cybersecurity experts,
          architects, DevOps engineers, AI professionals, and engineering
          leaders for organizations ranging from fast-growing companies to
          global enterprises.
        </p>

        <p style={{ marginTop: "24px" }}>
          My recruiting approach combines advanced Boolean search, AI-assisted
          sourcing, strategic talent mapping, market research, and transparent
          communication to build strong candidate relationships and deliver
          consistent hiring results.
        </p>

        <p style={{ marginTop: "24px" }}>
          RecruitWithEd represents my commitment to continuous learning,
          responsible use of AI, and modern recruiting practices that improve
          both the candidate and hiring manager experience.
        </p>

        <p
          style={{
            marginTop: "35px",
            color: "#38BDF8",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Building meaningful connections. Delivering exceptional talent.
        </p>
      </div>
    </section>
  );
}

export default About;