import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-left">

          <h1>
            Ed Johnson
          </h1>

          <h2>
            Senior Information Technology Consultant
          </h2>

          <p>
            Helping organizations build exceptional technology teams through
            strategic talent acquisition, AI-powered recruiting, executive
            search, and trusted hiring partnerships.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View My Work
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