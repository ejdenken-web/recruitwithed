import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <h1 className="hero-name">
            Ed Johnson
          </h1>

          <h2 className="hero-title">
            Senior Information Technology Consultant
          </h2>

          <div className="hero-mission">
            Building Careers. Building Teams.
          </div>

          <p className="hero-tagline">
            Scaling high-performing tech teams. Delivering seamless
            full-time hiring.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Hero;