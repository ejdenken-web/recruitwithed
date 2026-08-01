import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            AI-POWERED TECHNOLOGY RECRUITER
          </span>

          <h1>
            Helping Organizations Build Exceptional Technology Teams.
          </h1>

          <p>
            Over 10 years of recruiting experience supporting Fortune 500 companies,
            global enterprises, consulting firms, financial institutions, retail,
            healthcare, manufacturing and engineering organizations through strategic
            talent acquisition and AI-assisted recruiting.
          </p>

          <div className="hero-buttons">

            <a href="#clients" className="primary-btn">
              View Clients
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">

            <h3>Core Expertise</h3>

            <ul>

              <li>Technology Recruiting</li>

              <li>Executive Search</li>

              <li>AI Recruiting</li>

              <li>Boolean Search</li>

              <li>Talent Mapping</li>

              <li>Candidate Engagement</li>

              <li>Strategic Hiring</li>

              <li>Recruiting Leadership</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;