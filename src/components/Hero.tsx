import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          RECRUITWITHED
        </p>

        <h1>
          Connecting Great
          <br />
          Talent With
          <br />
          Great Companies.
        </h1>

        <p className="hero-text">
          Senior Information Technology Consultant specializing in
          AI-assisted recruiting, strategic sourcing, executive search,
          Boolean search, and technology hiring across North America.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Let's Connect
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <span className="small-title">
            RecruitWithEd
          </span>

          <h2>
            Ed Johnson
          </h2>

          <p>
            Senior Information Technology Consultant
          </p>

          <div className="card-divider"></div>

          <div className="hero-stats">

            <div>
              <h3>10+</h3>
              <span>Years</span>
            </div>

            <div>
              <h3>25</h3>
              <span>Certifications</span>
            </div>

            <div>
              <h3>35+</h3>
              <span>Clients</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;