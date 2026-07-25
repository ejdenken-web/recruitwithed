import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <h2>
            Let's Build Great Teams Together
          </h2>

          <p>
            Whether you're hiring exceptional technology talent, discussing
            recruiting strategies, or simply connecting with a fellow
            recruiting professional, I'd be happy to start the conversation.
          </p>

          <a
            href="mailto:recruitwithed@gmail.com"
            className="footer-button"
          >
            recruitwithed@gmail.com
          </a>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <div>

            <h3>
              RecruitWithEd
            </h3>

            <span>
              AI-Assisted Recruiting • Strategic Sourcing • Talent Acquisition
            </span>

          </div>

          <div className="footer-links">

            <a href="#hero">Home</a>

            <a href="#about">About</a>

            <a href="#clients">Clients</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>

          </div>

        </div>

        <div className="copyright">

          © 2026 Ed Johnson · RecruitWithEd. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;