import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="container footer-content">

        <div>

          <h2>
            RecruitWithEd
          </h2>

          <p>
            A professional recruiting portfolio by Ed Johnson, focused on
            building meaningful connections between organizations and
            exceptional talent through strategic talent acquisition.
          </p>

        </div>


        <div className="footer-links">

          <a href="#about">
            About
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#clients">
            Clients
          </a>

          <a href="#certifications">
            Certifications
          </a>

        </div>


        <div>

          <a
            className="footer-email"
            href="#contact"
          >
            Let's Connect
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