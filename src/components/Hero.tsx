import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            SENIOR INFORMATION TECHNOLOGY RECRUITER
          </span>

          <h1>
            Helping Organizations Build High-Performing Teams Through Strategic Talent Acquisition.
          </h1>

          <p>
            With over a decade of recruiting experience, I partner with organizations
            to identify, engage, and connect with exceptional professionals across
            technology and engineering domains.
          </p>

          <div className="hero-buttons">

            <a href="#clients" className="primary-btn">
              View Clients
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Connect
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">

            <h3>
              Recruiting Focus
            </h3>

            <ul>
              <li>Technology Talent Acquisition</li>
              <li>Strategic Sourcing</li>
              <li>Candidate Engagement</li>
              <li>Executive Search</li>
              <li>Talent Advisory</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;