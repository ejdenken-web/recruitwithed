import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [active, setActive] = useState("about");

  useEffect(() => {

    const sections = [
      "about",
      "impact",
      "clients",
      "certifications",
      "projects",
      "contact",
    ];

    const handleScroll = () => {

      const scroll = window.scrollY + 180;

      for (const section of sections) {

        const element = document.getElementById(section);

        if (!element) continue;

        if (
          scroll >= element.offsetTop &&
          scroll < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
        }

      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className="navbar">

      <div className="nav-container">

        <a
          href="#"
          className="logo"
        >
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
            href="#impact"
            className={active === "impact" ? "active" : ""}
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
            href="#certifications"
            className={active === "certifications" ? "active" : ""}
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
            href="#contact"
            className={active === "contact" ? "active" : ""}
          >
            Let's Connect
          </a>

        </nav>

      </div>

    </header>

  );
}

export default Navbar;