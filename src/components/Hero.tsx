import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background hero-background-one" />
      <div className="hero-background hero-background-two" />

      <div className="hero-container">
        <div className="hero-content">

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

          <a
            href="#home"
            className="hero-top-arrow"
            aria-label="Back to top"
          >
            ↑
          </a>

        </div>
      </div>
    </section>
  );
}

export default Hero;