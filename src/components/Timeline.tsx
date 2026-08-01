import "./Timeline.css";

function Timeline() {
  const timeline = [
    {
      year: "2024 – Present",
      role: "Senior Information Technology Recruiter",
      company: "All Known Services",
    },
    {
      year: "2022 – 2024",
      role: "Recruiting Manager",
      company: "Technology Consulting",
    },
    {
      year: "2018 – 2022",
      role: "Operations & Recruiting Manager",
      company: "Talent Acquisition",
    },
    {
      year: "2010 – 2018",
      role: "Technical Recruiter",
      company: "Technology Staffing",
    },
  ];

  return (
    <section className="timeline">

      <div className="container">

        <span className="section-tag">
          CAREER
        </span>

        <h2 className="section-title">
          Professional Journey
        </h2>

        <div className="timeline-wrapper">

          {timeline.map((item) => (

            <div
              key={item.year}
              className="timeline-item"
            >

              <div className="timeline-year">

                {item.year}

              </div>

              <div className="timeline-card">

                <h3>{item.role}</h3>

                <p>{item.company}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Timeline;