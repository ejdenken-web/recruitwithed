import "./AboutImpact.css";

function AboutImpact() {
  const impactStats = [
    {
      value: "10+",
      label: "Years of Professional Experience",
    },
    {
      value: "6–40",
      label: "Recruiters Managed & Mentored",
    },
    {
      value: "50+",
      label: "Technology & Recruiting Skills",
    },
    {
      value: "100+",
      label: "Professional Engagements",
    },
  ];

  return (
    <section
      id="about"
      className="about-impact"
    >
      <div className="about-impact__container">

        <span className="section-tag">
          ABOUT & IMPACT
        </span>

        <h2>
          Experience That
          <br />
          <span>Creates Impact.</span>
        </h2>

        <p>
          Experienced in technology recruiting, talent acquisition,
          candidate engagement, and supporting organizations with
          high-performing technology professionals.
        </p>

        <div className="about-impact__grid">
          {impactStats.map((stat) => (
            <div
              className="impact-card"
              key={stat.label}
            >
              <h3>{stat.value}</h3>

              <p>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutImpact;