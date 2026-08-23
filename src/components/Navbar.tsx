import { useEffect, useState } from "react";
import "./Navbar.css";

type NavItem = {
  id: string;
  label: string;
  target: string;
};

const navItems: NavItem[] = [
  {
    id: "about",
    label: "About",
    target: "hero",
  },
  {
    id: "clients",
    label: "Clients",
    target: "clients",
  },
  {
    id: "recruiting-platforms",
    label: "Recruiting Platforms",
    target: "recruiting-platforms",
  },
  {
    id: "certifications",
    label: "Certifications",
    target: "certifications",
  },
  {
    id: "projects",
    label: "Projects",
    target: "projects",
  },
  {
    id: "tech-stack",
    label: "Technology & Tools",
    target: "tech-stack",
  },
  {
    id: "lets-connect",
    label: "Let's Connect",
    target: "lets-connect",
  },
];

function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let current = "about";

      for (const item of navItems) {
        const element = document.getElementById(item.target);

        if (!element) {
          continue;
        }

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < bottom
        ) {
          current = item.id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateTo = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string,
    activeId: string
  ) => {
    event.preventDefault();

    const element = document.getElementById(target);

    if (!element) {
      return;
    }

    const navbarHeight = 82;

    const targetPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    setActive(activeId);

    window.history.replaceState(
      null,
      "",
      `#${target}`
    );
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <a
          href="#hero"
          className="logo"
          onClick={(event) =>
            navigateTo(event, "hero", "about")
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
              href={`#${item.target}`}
              className={
                active === item.id
                  ? "active"
                  : ""
              }
              onClick={(event) =>
                navigateTo(
                  event,
                  item.target,
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