import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <a href="#hero" className="logo">
          Recruit<span>WithEd</span>
        </a>

        <nav>

          <a href="#about">About</a>

          <a href="#why-work-with-me">Expertise</a>

          <a href="#clients">Clients</a>

          <a href="#certifications">Certifications</a>

          <a href="#projects">Projects</a>

          <a href="#contact" className="contact-btn">
            Let's Connect
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;