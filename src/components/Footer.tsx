import "./Footer.css";

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 90;

    const targetPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  return (
    <footer id="lets-connect" className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h3>Quick Links</h3>

          <div className="footer-nav">

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
              Projects
            </button>

            <button
              onClick={() => scrollToSection("tech-stack")}
            >
              Technology & Tools
            </button>

            <button
              onClick={() => scrollToSection("lets-connect")}
            >
              Let's Connect
            </button>

          </div>
        </div>

        <div className="footer-column footer-contact">

          <h3>Let's Connect</h3>

          <div className="footer-socials">

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

            <a
              href="mailto:johnson@allknownservices.com"
              className="footer-social"
            >
              Email
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} RecruitWithEd. All rights reserved.
        </p>

        <p className="footer-credit">
          Designed and Developed by <strong>Ed Johnson</strong>
        </p>

      </div>

    </footer>
  );
}

export default Footer;