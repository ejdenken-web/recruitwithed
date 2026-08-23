import "./Footer.css";

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="lets-connect" className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            RecruitWithEd
          </div>

          <div className="footer-socials">
            <a
              href="mailto:recruitwithed@gmail.com"
              className="footer-social"
            >
              Email
            </a>

            <a
              href="https://github.com/ejdenken-web/recruitwithed"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-column footer-quick-links">
          <h3>Quick Links</h3>

          <nav className="footer-nav">
            <button onClick={() => scrollToSection("home")}>
              About
            </button>

            <button onClick={() => scrollToSection("clients")}>
              Clients
            </button>

            <button
              onClick={() =>
                scrollToSection("recruiting-platforms")
              }
            >
              Recruiting Platforms
            </button>

            <button
              onClick={() =>
                scrollToSection("certifications")
              }
            >
              Certifications
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Featured Projects
            </button>

            <button onClick={() => scrollToSection("tech-stack")}>
              Technology & Tools
            </button>

            <button
              onClick={() =>
                scrollToSection("lets-connect")
              }
            >
              Let's Connect
            </button>
          </nav>
        </div>

      </div>

      <div className="footer-back-top">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="footer-top-arrow"
        >
          ↑
        </button>

        <span>Back to top</span>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} RecruitWithEd
        </div>

        <div>
          Designed & Developed by{" "}
          <strong>Ed Johnson</strong>
        </div>
      </div>
    </footer>
  );
}

export default Footer;