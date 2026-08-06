function About() {
  return (
    <section
      id="about"
      style={{
        background: "#08101F",
        padding: "120px 8%",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "rgba(56,189,248,.12)",
            border: "1px solid rgba(56,189,248,.25)",
            color: "#38BDF8",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "30px",
          }}
        >
          ABOUT
        </span>

        <h2
          style={{
            color: "#38BDF8",
            fontSize: "54px",
            fontWeight: 800,
            marginBottom: "35px",
          }}
        >
          Building Careers.<br />
          Building Teams.
        </h2>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "19px",
            lineHeight: "1.9",
            marginBottom: "28px",
          }}
        >
          With over a decade of recruiting experience, I believe successful
          hiring begins with trust, meaningful conversations, and understanding
          the people behind every career decision.
        </p>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "19px",
            lineHeight: "1.9",
            marginBottom: "28px",
          }}
        >
          Throughout my career, I have partnered with organizations across
          Technology, Financial Services, Healthcare, Consulting,
          Manufacturing, Aviation, Retail, and Engineering, helping build
          high-performing teams through strategic talent acquisition.
        </p>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "19px",
            lineHeight: "1.9",
            margin: 0,
          }}
        >
          RecruitWithEd reflects my commitment to continuous learning,
          responsible AI adoption, and modern recruiting practices that create
          better hiring experiences for both organizations and professionals.
        </p>
      </div>
    </section>
  );
}

export default About;