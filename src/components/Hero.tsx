import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            RECRUITWITHED
          </span>

          <h1>
            Ed Johnson
          </h1>

          <h2>
            Senior Information Technology Consultant
          </h2>

          <p>
            Helping organizations build high-performing teams through strategic
            talent acquisition, meaningful candidate relationships, and trusted
            hiring partnerships across technology, engineering, financial
            services, healthcare, consulting, retail, manufacturing, and
            aviation.
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
              Let's Connect
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;