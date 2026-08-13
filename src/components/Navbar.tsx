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
      const marker = window.scrollY + 120;
      let current = "about";

      for (const item of navItems) {
        const element = document.getElementById(item.id);

        if (!element) continue;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY;

        const bottom = top + element.offsetHeight;

        if (marker >= top && marker < bottom) {
          current = item.id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const navbar =
      document.querySelector(".navbar");

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

    setActive(id);

    window.history.replaceState(
      null,
      "",
      `#${id}`
    );
  };

  const goHome = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setActive("about");

    window.history.replaceState(
      null,
      "",
      "#about"
    );
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <a
          href="#about"
          className="logo"
          onClick={goHome}
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
                handleNavigation(
                  event,
                  item.id
                )
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