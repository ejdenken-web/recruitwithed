import "./Footer.css";

function Footer() {
  return (
    <footer
      className="footer"
      id="contact"
    >

      <div className="footer-container">

        <div className="footer-brand">

          <span className="section-tag">
            LET'S CONNECT
          </span>

          <h2>
            RecruitWithEd
          </h2>

        </div>

        <div className="footer-links">

          <a href="#about">
            About
          </a>

          <a href="#impact">
            Career Highlights
          </a>

          <a href="#clients">
            Clients
          </a>

          <a href="#certifications">
            Certifications
          </a>

          <a href="#projects">
            Projects
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 RecruitWithEd • Designed & Developed by Ed Johnson

      </div>

    </footer>
  );
}

export default Footer;