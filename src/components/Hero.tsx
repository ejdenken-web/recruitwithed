import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            AI-POWERED TECHNOLOGY RECRUITER
          </span>

          <h1>
            Connecting Exceptional Talent with Exceptional Organizations.
          </h1>

          <p>
            I help organizations build high-performing technology teams through
            AI-assisted recruiting, executive search, strategic sourcing,
            Boolean search, and modern talent acquisition practices.
          </p>

          <div className="hero-buttons">

            <a
              href="#clients"
              className="primary-btn"
            >
              View Clients
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Contact Me
            </a>

          </div>

        </div>

        <div className="hero-side">

          <div className="hero-panel">

            <h3>Core Focus</h3>

            <ul>

              <li>Technology Recruiting</li>

              <li>Executive Search</li>

              <li>AI-Assisted Recruiting</li>

              <li>Strategic Talent Acquisition</li>

              <li>Boolean Search</li>

              <li>Talent Mapping</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;