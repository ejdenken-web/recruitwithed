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
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#38BDF8",
            fontSize: "2.7rem",
            marginBottom: "30px",
          }}
        >
          About Me
        </h2>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "18px",
            lineHeight: "1.9",
            marginBottom: "28px",
          }}
        >
          I'm <strong>Ed Johnson</strong>, a Senior Information Technology
          Recruiter with over <strong>10 years of experience</strong> delivering
          talent acquisition solutions across the United States, Canada, India,
          and Japan. My expertise includes full-cycle recruiting, technical
          sourcing, Boolean search, stakeholder management, recruitment
          operations, and AI-powered recruiting strategies.
        </p>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "18px",
            lineHeight: "1.9",
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
            color: "#38BDF8",
            fontWeight: "bold",
            fontSize: "20px",
            marginTop: "35px",
          }}
        >
          Building meaningful connections. Delivering exceptional talent.
        </p>
      </div>
    </section>
  );
}

export default About;