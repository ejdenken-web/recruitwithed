import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background hero-background-one" />
      <div className="hero-background hero-background-two" />

      <div className="hero-container">
        <div className="hero-content">

          <div className="hero-experience">
            OVER A DECADE OF EXPERIENCE
          </div>

          <h1 className="hero-name">
            Ed Johnson
          </h1>

          <h2 className="hero-title">
            Senior Information Technology Consultant
          </h2>

          <h3 className="hero-tagline">
            Building Careers. Building Teams.
          </h3>

          <p className="hero-description">
            Connecting exceptional technology professionals with
            organizations building and scaling high-performing teams.
          </p>

          <div className="hero-consultant-profile">
            <h4>Talent Acquisition Consultant</h4>

            <p>
              With over a decade of experience scaling technical and
              engineering teams within fast-paced, high-growth IT ecosystems.
              Trusted advisor to executive leadership, providing deep
              competency in technical workforce strategy, developer talent
              branding, and data-driven hiring metrics. Track record of
              designing agile recruitment infrastructures that support rapid
              organizational evolution — from engineering headcount planning
              through offer close. Dedicated to aligning tech talent
              acquisition with broader business architecture to fuel
              sustainable technical innovation.
            </p>
          </div>

          <div className="hero-actions">
            <a
              href="#clients"
              className="hero-button hero-button-primary"
            >
              Explore My Work
            </a>

            <a
              href="#lets-connect"
              className="hero-button hero-button-secondary"
            >
              Let&apos;s Connect
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;