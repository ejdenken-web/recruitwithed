import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="container footer-content">

        <div>

          <h2>RecruitWithEd</h2>

          <p>
            Senior Technology Recruiter specializing in AI-assisted recruiting,
            Boolean search, executive search, and strategic talent acquisition.
          </p>

        </div>

        <div className="footer-links">

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#clients">Clients</a>

          <a href="#certifications">Certifications</a>

        </div>

        <div>

          <a
            className="footer-email"
            href="mailto:johnson@allknownservices.com"
          >
            johnson@allknownservices.com
          </a>

        </div>

      </div>

      <div className="copyright">

        © 2026 RecruitWithEd • Designed & Developed by Ed Johnson

      </div>

    </footer>
  );
}

export default Footer;