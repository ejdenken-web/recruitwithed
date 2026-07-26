import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-left">

        <p className="hero-tag">
          RECRUITWITHED
        </p>

        <h1>
          Building High-Performing
          <br />
          Technology Teams
        </h1>

        <p className="hero-description">
          Senior Information Technology Consultant specializing in
          AI-assisted recruiting, strategic talent acquisition,
          executive search, and modern sourcing strategies for
          organizations across North America, Japan, and India.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            View Projects
          </a>

          <a
            href="#contact"
            className="secondary-btn"
          >
            Let's Connect
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-panel">

          <div className="panel-title">
            RecruitWithEd
          </div>

          <div className="panel-subtitle">
            AI-Assisted Recruiting
          </div>

          <div className="stats-grid">

            <div className="stat-box">
              <h2>10+</h2>
              <span>Years</span>
            </div>

            <div className="stat-box">
              <h2>35+</h2>
              <span>Clients</span>
            </div>

            <div className="stat-box">
              <h2>25</h2>
              <span>Certifications</span>
            </div>

            <div className="stat-box">
              <h2>3</h2>
              <span>Regions</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;