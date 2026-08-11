import { useEffect, useState } from "react";
import "./Navbar.css";

type NavItem = {
  id: string;
  label: string;
};

function Navbar() {
  const [active, setActive] = useState("about");

  const navItems: NavItem[] = [
    {
      id: "about",
      label: "About",
    },
    {
      id: "career-highlights",
      label: "Career Highlights",
    },
    {
      id: "clients",
      label: "Clients",
    },
    {
      id: "recruiting-platforms",
      label: "Recruiting Platforms",
    },
    {
      id: "certifications",
      label: "Certifications",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "lets-connect",
      label: "Let's Connect",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "about";

      for (const item of navItems) {
        const element = document.getElementById(item.id);

        if (!element) {
          continue;
        }

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          currentSection = item.id;
          break;
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) {
      console.warn(
        `RecruitWithEd navigation target not found: #${id}`
      );
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(id);

    window.history.replaceState(
      null,
      "",
      `#${id}`
    );
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <a
          href="#about"
          className="logo"
          onClick={(event) =>
            handleNavigation(event, "about")
          }
        >
          RecruitWithEd
        </a>

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                active === item.id
                  ? "active"
                  : ""
              }
              onClick={(event) =>
                handleNavigation(event, item.id)
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;