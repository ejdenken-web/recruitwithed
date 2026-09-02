import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
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

          <p className="hero-profile">
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

          <div className="hero-learning">
            <div className="hero-learning-line" />

            <p className="hero-learning-statement">
              Continuous learning is non-negotiable when you're building solutions for clients.
            </p>

            <div className="hero-learning-line hero-learning-line-bottom" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;