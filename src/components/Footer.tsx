import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h3>RecruitWithEd</h3>

          <div className="footer-social">

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a href="mailto:johnson@allknownservices.com">
              Email
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <nav>

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
              Featured Projects
            </a>

            <a href="#recruiting-platforms">
              Recruiting Platforms
            </a>

            <a href="#contact">
              Let&apos;s Connect
            </a>

          </nav>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 RecruitWithEd • Designed &amp; Developed by Ed Johnson
        </p>

      </div>

    </footer>
  );
}

export default Footer;