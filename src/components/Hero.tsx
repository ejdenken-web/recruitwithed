import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        <div className="hero-left">

          <p className="hero-label">
            RECRUITWITHED
          </p>

          <h1>
            Ed <span>Johnson</span>
          </h1>

          <h2>
            Senior Information Technology Recruiter
          </h2>

          <p className="hero-description">
            Helping organizations identify exceptional technology talent through
            strategic sourcing, AI-assisted recruiting, market intelligence,
            and relationship-driven hiring.
          </p>

          <div className="hero-buttons">

            <a
              href="#contact"
              className="primary-btn"
            >
              Let's Connect
            </a>

            <a
              href="#projects"
              className="secondary-btn"
            >
              View Portfolio
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="profile-circle">

            <div className="profile-placeholder">

              <svg
                width="140"
                height="140"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                />

                <path
                  d="M5 20C5 16.7 8.1 14 12 14C15.9 14 19 16.7 19 20"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;