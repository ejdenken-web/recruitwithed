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
    <header className="navbar">
      <div className="nav-container">

        <a
          href="#about"
          className="logo"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("about");
          }}
        >
          RecruitWithEd
        </a>

        <nav className="nav-links">

          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>

          <a
            href="#career-highlights"
            className={
              active === "career-highlights" ? "active" : ""
            }
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("career-highlights");
            }}
          >
            Career Highlights
          </a>

          <a
            href="#clients"
            className={active === "clients" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("clients");
            }}
          >
            Clients
          </a>

          <a
            href="#recruiting-platforms"
            className={
              active === "recruiting-platforms" ? "active" : ""
            }
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("recruiting-platforms");
            }}
          >
            Recruiting Platforms
          </a>

          <a
            href="#certifications"
            className={
              active === "certifications" ? "active" : ""
            }
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("certifications");
            }}
          >
            Certifications
          </a>

          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>

          <a
            href="#lets-connect"
            className={
              active === "lets-connect" ? "active" : ""
            }
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("lets-connect");
            }}
          >
            Let&apos;s Connect
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;