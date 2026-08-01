function About() {
  return (
    <section
      id="about"
      style={{
        background: "#111827",
        color: "white",
        padding: "clamp(70px, 10vw, 90px) 20px",
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
        <h2
          style={{
            color: "#38BDF8",
            fontSize: "clamp(2rem, 5vw, 2.7rem)",
            marginBottom: "35px",
          }}
        >
          About
        </h2>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "1.9",
            color: "#CBD5E1",
            marginBottom: "28px",
          }}
        >
          With over a decade of recruiting experience, I believe successful
          hiring begins with trust, meaningful conversations, and understanding
          the people behind every career decision.
        </p>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "1.9",
            color: "#CBD5E1",
            marginBottom: "28px",
          }}
        >
          I have partnered with clients across Technology, Financial Services,
          Healthcare, Consulting, Retail, Manufacturing, Aviation, Consumer
          Goods, and Engineering, helping organizations build high-performing
          teams through strategic talent acquisition.
        </p>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "1.9",
            color: "#CBD5E1",
            marginBottom: "28px",
          }}
        >
          My recruiting approach combines talent research, market insights,
          strategic sourcing, and transparent communication to build strong
          candidate relationships and deliver consistent hiring results.
        </p>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "1.9",
            color: "#CBD5E1",
            margin: 0,
          }}
        >
          RecruitWithEd represents my commitment to continuous learning,
          responsible use of modern recruiting practices, and creating a better
          experience for both candidates and hiring teams.
        </p>

      </div>
    </section>
  );
}

export default About;