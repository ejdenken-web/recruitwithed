import "./Services.css";

function Services() {
  const services = [
    {
      title: "Technology Recruiting",
      description:
        "Connecting organizations with software engineers, cloud professionals, data experts, cybersecurity specialists, DevOps engineers, AI professionals, and technology leaders.",
    },
    {
      title: "Strategic Talent Sourcing",
      description:
        "Advanced Boolean search, LinkedIn sourcing, talent mapping, market research, and proactive candidate engagement to identify exceptional professionals.",
    },
    {
      title: "AI-Assisted Recruiting",
      description:
        "Leveraging modern AI tools including ChatGPT, Claude, Microsoft Copilot, Perplexity, and DeepSeek to improve research, sourcing, and recruiting workflows.",
    },
  ];

  return (
    <section className="services-section">

      <div className="services-header">

        <p className="section-tag">
          EXPERTISE
        </p>

        <h2>
          What I Do
        </h2>

        <p>
          I help organizations build high-performing technology teams through
          strategic recruiting, modern sourcing techniques, and AI-assisted
          recruiting workflows.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (

          <div
            className="service-card"
            key={service.title}
          >

            <div className="service-icon">
              ★
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;