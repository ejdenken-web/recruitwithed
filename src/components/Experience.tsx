import "./Experience.css";

function Experience() {
  const experience = [
    {
      title: "Technology Recruiting",
      description:
        "Specialized in hiring Software Engineers, Cloud Engineers, Data Engineers, DevOps Engineers, Cybersecurity Professionals, AI Engineers, Architects, QA Engineers, Product Managers, and Technology Leaders.",
    },
    {
      title: "Industries",
      description:
        "Supported clients across Technology, Financial Services, Healthcare, Manufacturing, Retail, Aviation, Consumer Goods, Engineering, and Consulting.",
    },
    {
      title: "Modern Recruiting",
      description:
        "Leveraging AI-assisted recruiting, advanced Boolean search, talent mapping, market intelligence, and relationship-driven hiring strategies.",
    },
  ];

  return (
    <section className="experience-section">

      <div className="experience-header">

        <span className="section-tag">
          EXPERIENCE
        </span>

        <h2>What I Specialize In</h2>

      </div>

      <div className="experience-grid">

        {experience.map((item) => (
          <div className="experience-card" key={item.title}>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;