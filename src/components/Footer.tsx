import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-brand">

          <h3>
            RecruitWithEd
          </h3>

          <p>
            Modern talent acquisition, AI-assisted recruiting,
            strategic sourcing, and professional portfolio development.
          </p>

        </div>

        <div className="footer-links">

          <h4>
            Quick Links
          </h4>

          <nav>

            <a href="#about">
              About
            </a>

            <a href="#clients">
              Clients
            </a>

            <a href="#certifications">
              Certifications
            </a>

            <a href="#projects">
              Featured Projects
            </a>

          </nav>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 RecruitWithEd • Designed & Developed by Ed Johnson
        </p>

      </div>

    </footer>
  );
}

export default Footer;