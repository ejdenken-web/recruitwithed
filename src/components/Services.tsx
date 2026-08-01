import "./Services.css";
import IconCard from "./IconCard";

function Services() {
  return (
    <section className="services">

      <div className="services-header">

        <span className="section-tag">
          SERVICES
        </span>

        <h2>
          How I Help Organizations
        </h2>

        <p>
          Delivering modern recruiting solutions through strategic sourcing,
          executive search, AI-assisted recruiting, and talent acquisition.
        </p>

      </div>

      <div className="services-grid">

        <IconCard
          icon="🎯"
          title="Technology Recruiting"
          description="Software Engineers, Cloud, Data, AI, DevOps, Cybersecurity and Engineering professionals."
        />

        <IconCard
          icon="🤖"
          title="AI Recruiting"
          description="Leveraging AI tools to improve sourcing, recruiting workflows, candidate engagement and productivity."
        />

        <IconCard
          icon="🔍"
          title="Executive Search"
          description="Strategic sourcing and recruiting for senior technical and leadership positions."
        />

        <IconCard
          icon="📊"
          title="Talent Strategy"
          description="Boolean Search, Talent Mapping, Market Intelligence and modern recruiting methodologies."
        />

      </div>

    </section>
  );
}

export default Services;