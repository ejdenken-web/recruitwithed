import "./Footer.css";

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbar = document.querySelector(".navbar");

    const navbarHeight =
      navbar instanceof HTMLElement
        ? navbar.offsetHeight
        : 80;

    const elementTop =
      element.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: Math.max(
        0,
        elementTop - navbarHeight - 12
      ),
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${id}`
    );
  };

  return (
    <footer
      id="lets-connect"
      className="footer"
    >
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <h2>Ed Johnson</h2>

            <p>
              Senior Information Technology Consultant
            </p>

            <span>
              Building Careers. Building Teams.
            </span>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <button
              type="button"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("clients")}
            >
              Clients
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection("recruiting-platforms")
              }
            >
              Recruiting Platforms
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection("certifications")
              }
            >
              Certifications
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>

            <button
              type="button"
              onClick={() =>
                scrollToSection("lets-connect")
              }
            >
              Let's Connect
            </button>
          </div>

          <div className="footer-contact">
            <h3>Let's Connect</h3>

            <p>
              Interested in building exceptional
              technology teams?
            </p>

            <a href="mailto:johnson@allknownservices.com">
              johnson@allknownservices.com
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} RecruitWithEd.
            All rights reserved.
          </p>

          <p>
            Built by Ed Johnson
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
