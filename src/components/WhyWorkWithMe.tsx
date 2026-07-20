function WhyWorkWithMe() {
  const values = [
    {
      title: "Strategic Talent Partner",
      description:
        "Helping organizations identify, attract, and connect with exceptional technology professionals through focused recruiting strategies.",
    },
    {
      title: "Technology-Driven Recruiting",
      description:
        "Leveraging AI-assisted workflows, modern sourcing techniques, and innovative recruiting approaches to improve talent acquisition.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Focused on learning, adapting, and building better recruiting processes through technology, innovation, and professional development.",
    },
  ];

  return (
    <section
      id="why-work"
      style={{
        background: "#0B1120",
        color: "white",
        padding: "80px 40px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          fontSize: "2.5rem",
          marginBottom: "40px",
        }}
      >
        Why Work With Me
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {values.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1E293B",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h3
              style={{
                color: "#38BDF8",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#CBD5E1",
                lineHeight: "1.7",
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