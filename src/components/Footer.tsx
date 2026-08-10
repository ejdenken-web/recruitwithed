import "./Footer.css";

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer id="lets-connect">
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
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>

            <a
              href="#career-highlights"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("career-highlights");
              }}
            >
              Career Highlights
            </a>

            <a
              href="#recruiting-platforms"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("recruiting-platforms");
              }}
            >
              Recruiting Platforms
            </a>

            <a
              href="#clients"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("clients");
              }}
            >
              Clients
            </a>

            <a
              href="#certifications"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("certifications");
              }}
            >
              Certifications
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>

            <a
              href="#lets-connect"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("lets-connect");
              }}
            >
              Let&apos;s Connect
            </a>
          </nav>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 RecruitWithEd</p>

        <p>Designed &amp; Developed by Ed Johnson</p>
      </div>
    </footer>
  );
}

export default Footer;