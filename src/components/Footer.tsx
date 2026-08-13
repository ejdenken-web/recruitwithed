import "./Footer.css";

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <footer id="lets-connect" className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Ed Johnson</h2>

          <p className="footer-title">
            Senior Information Technology Consultant
          </p>

          <p className="footer-mission">
            Building Careers. Building Teams.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <div className="footer-nav">
            <button onClick={() => scrollToSection("about")}>
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
              onClick={() => scrollToSection("certifications")}
            >
              Certifications
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("tech-stack")}>
              Technology & Tools
            </button>

            <button
              onClick={() => scrollToSection("lets-connect")}
            >
              Let's Connect
            </button>
          </div>
        </div>

        <div className="footer-connect">
          <h3>Let's Connect</h3>

          <p>
            Interested in building exceptional technology teams?
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} RecruitWithEd. All rights
          reserved.
        </p>

        <p className="footer-credit">
          Designed and Developed by <strong>Ed Johnson</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;