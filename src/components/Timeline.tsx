import "./Timeline.css";

function Timeline() {
  const timeline = [
    {
      year: "2010",
      title: "Started Recruiting Career",
      description:
        "Began recruiting and talent acquisition, building a strong foundation in candidate sourcing and relationship management.",
    },
    {
      year: "2016",
      title: "Technology Recruiting",
      description:
        "Focused on recruiting software engineers, cloud professionals, data engineers, cybersecurity experts, and technology leaders.",
    },
    {
      year: "2024",
      title: "RecruitWithEd",
      description:
        "Launched RecruitWithEd to showcase modern recruiting, AI-assisted sourcing, professional branding, and portfolio development.",
    },
    {
      year: "Today",
      title: "AI-Assisted Recruiting",
      description:
        "Continuously learning and applying AI tools to improve recruiting workflows, sourcing strategies, and candidate engagement.",
    },
  ];

  return (
    <section className="timeline-section">

      <div className="timeline-header">

        <span className="section-tag">
          JOURNEY
        </span>

        <h2>Career Timeline</h2>

      </div>

      <div className="timeline">

        {timeline.map((item) => (

          <div
            className="timeline-item"
            key={item.year}
          >

            <div className="timeline-year">
              {item.year}
            </div>

            <div className="timeline-content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;