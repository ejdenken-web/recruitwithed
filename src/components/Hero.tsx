import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="hero-container">

        <div>

          <div className="hero-badge">
            RecruitWithEd
          </div>

          <h1>
            Ed Johnson
          </h1>

          <h2>
            Senior Technical Recruiter <br />
            AI Recruiting Specialist
          </h2>

          <p>
            Helping organizations build exceptional teams through
            strategic recruiting, AI-assisted sourcing, and trusted
            partnerships across Technology, Financial Services,
            Healthcare, Manufacturing, Retail, and Engineering.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
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

        <div className="hero-image">

          <div className="photo-placeholder">

            Your Professional Photo

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;