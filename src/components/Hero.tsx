import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="hero">

      <div className="hero-background" aria-hidden="true">
        <div className="hero-glow hero-glow-cyan" />
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-purple" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container">

        <div className="hero-content">

          <h1>Ed Johnson</h1>

          <h2>
            Senior Information Technology Consultant
          </h2>

          <p className="hero-tagline">
            Building Careers. Building Teams.
          </p>

          <p className="hero-subtagline">
            Scaling high-performing tech teams. Delivering seamless
            full-time hiring.
          </p>

          <div className="hero-about">

            <span className="hero-about-label">
              ABOUT ME
            </span>

            <p>
              With over a decade of recruitment experience, I
              streamline the complexities of talent acquisition to
              help organizations scale efficiently. My expertise lies
              in architecting frictionless, end-to-end pipelines for
              critical full-time W2 hiring, ensuring compliance,
              speed, and precision at every stage.
            </p>

            <p>
              I combine a human-first approach with modern,
              AI-powered recruiting tools to eliminate hiring
              friction. Throughout my journey, I have partnered with
              market leaders across Technology, Finance, and
              Engineering to build agile workforces that sustain
              long-term business growth.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;