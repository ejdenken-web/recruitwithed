import "./AboutImpact.css";

function CareerHighlights() {
  const stats = [
    {
      value: "10+",
      title: "Years of Professional Recruiting Experience",
    },
    {
      value: "35+",
      title: "Enterprise Clients Supported",
    },
    {
      value: "25+",
      title: "Professional Certifications",
    },
    {
      value: "6–40",
      title: "Recruiters Managed & Mentored",
    },
  ];

  return (
    <section
      className="about-impact"
      id="career-highlights"
    >
      <div className="about-impact__container">
        <span className="section-tag">
          CAREER HIGHLIGHTS
        </span>

        <div className="about-impact__grid">
          {stats.map((item) => (
            <div
              className="impact-card"
              key={item.title}
            >
              <h3>{item.value}</h3>

              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerHighlights;