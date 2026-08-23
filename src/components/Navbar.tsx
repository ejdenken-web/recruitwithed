import "./Navbar.css";

type View =
  | "about"
  | "clients"
  | "recruiting-platforms"
  | "certifications"
  | "projects"
  | "tech-stack"
  | "lets-connect";

type NavItem = {
  id: View;
  label: string;
};

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
    id: "tech-stack",
    label: "Technology & Tools",
  },
  {
    id: "lets-connect",
    label: "Let's Connect",
  },
];

type NavbarProps = {
  activeView: View;
  onNavigate: (view: View) => void;
};

function Navbar({
  activeView,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="navbar">
      <div className="nav-container">

        <button
          type="button"
          className="logo"
          onClick={() => onNavigate("about")}
        >
          RecruitWithEd
        </button>

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className={
                activeView === item.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                onNavigate(item.id)
              }
            >
              {item.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}

export default Navbar;