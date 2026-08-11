import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = [
      "career-highlights",
      "clients",
      "recruiting-platforms",
      "certifications",
      "projects",
      "lets-connect",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      if (window.scrollY < 250) {
        setActive("about");
        return;
      }

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

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setActive("about");
      return;
    }

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
          href="#home"
          className="logo"
          onClick={(event) => scrollToSection(event, "home")}
        >
          RecruitWithEd
        </a>

        <nav className="nav-links">

          <a
            href="#home"
            className={active === "about" ? "active" : ""}
            onClick={(event) => scrollToSection(event, "home")}
          >
            About
          </a>

          <a
            href="#career-highlights"
            className={
              active === "career-highlights" ? "active" : ""
            }
            onClick={(event) =>
              scrollToSection(event, "career-highlights")
            }
          >
            Career Highlights
          </a>

          <a
            href="#clients"
            className={active === "clients" ? "active" : ""}
            onClick={(event) => scrollToSection(event, "clients")}
          >
            Clients
          </a>

          <a
            href="#recruiting-platforms"
            className={
              active === "recruiting-platforms" ? "active" : ""
            }
            onClick={(event) =>
              scrollToSection(event, "recruiting-platforms")
            }
          >
            Recruiting Platforms
          </a>

          <a
            href="#certifications"
            className={
              active === "certifications" ? "active" : ""
            }
            onClick={(event) =>
              scrollToSection(event, "certifications")
            }
          >
            Certifications
          </a>

          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={(event) => scrollToSection(event, "projects")}
          >
            Projects
          </a>

          <a
            href="#lets-connect"
            className={
              active === "lets-connect" ? "active" : ""
            }
            onClick={(event) =>
              scrollToSection(event, "lets-connect")
            }
          >
            Let's Connect
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;