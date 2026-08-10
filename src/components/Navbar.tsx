import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = [
      "about",
      "career-highlights",
      "clients",
      "recruiting-platforms",
      "certifications",
      "projects",
      "lets-connect",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        if (
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="navbar-container">
        <a href="#about" className="logo">
          RecruitWithEd
        </a>

        <nav className="nav-links">
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
          >
            About
          </a>

          <a
            href="#career-highlights"
            className={
              active === "career-highlights" ? "active" : ""
            }
          >
            Career Highlights
          </a>

          <a
            href="#clients"
            className={active === "clients" ? "active" : ""}
          >
            Clients
          </a>

          <a
            href="#recruiting-platforms"
            className={
              active === "recruiting-platforms" ? "active" : ""
            }
          >
            Recruiting Platforms
          </a>

          <a
            href="#certifications"
            className={
              active === "certifications" ? "active" : ""
            }
          >
            Certifications
          </a>

          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
          >
            Projects
          </a>

          <a
            href="#lets-connect"
            className={
              active === "lets-connect" ? "active" : ""
            }
          >
            Let&apos;s Connect
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;