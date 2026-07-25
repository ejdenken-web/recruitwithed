import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="#hero" className="logo">
        RecruitWithEd
      </a>

      <div className="nav-links">

        <a href="#about">
          About
        </a>

        <a href="#why-work-with-me">
          Why Me
        </a>

        <a href="#clients">
          Clients
        </a>

        <a href="#certifications">
          Certifications
        </a>

        <a href="#projects">
          Projects
        </a>

        <a
          href="#contact"
          className="contact-btn"
        >
          Let's Connect
        </a>

      </div>

    </nav>
  );
}

export default Navbar;