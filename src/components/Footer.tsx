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

  return (
    <footer id="lets-connect" className="footer">
      <div className="footer-container">

        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE */}
        <div className="footer-column footer-quick-links">
          <h3>Quick Links</h3>

          <nav className="footer-nav">

            <button
              onClick={() => scrollToSection("hero")}
            >
              <span>01</span>
              About
            </button>

            <button
              onClick={() => scrollToSection("clients")}
            >
              <span>02</span>
              Clients
            </button>

            <button
              onClick={() =>
                scrollToSection("recruiting-platforms")
              }
            >
              <span>03</span>
              Recruiting Platforms
            </button>

            <button
              onClick={() =>
                scrollToSection("certifications")
              }
            >
              <span>04</span>
              Certifications
            </button>

            <button
              onClick={() =>
                scrollToSection("projects")
              }
            >
              <span>05</span>
              Featured Projects
            </button>

            <button
              onClick={() =>
                scrollToSection("tech-stack")
              }
            >
              <span>06</span>
              Technology & Tools
            </button>

            <button
              onClick={() =>
                scrollToSection("lets-connect")
              }
            >
              <span>07</span>
              Let's Connect
            </button>

          </nav>
        </div>

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