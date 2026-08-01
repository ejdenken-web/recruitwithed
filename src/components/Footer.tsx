import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>RecruitWithEd</h2>

          <p>
            AI-powered technology recruiting, executive search,
            strategic sourcing, and modern talent acquisition.
          </p>

        </div>

        <div className="footer-links">

          <h3>Navigation</h3>

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#certifications">Certifications</a>

        </div>

        <div className="footer-contact">

          <h3>Connect</h3>

          <a href="mailto:recruitwithed@gmail.com">
            recruitwithed@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ejdenken-web/recruitwithed"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 RecruitWithEd. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;