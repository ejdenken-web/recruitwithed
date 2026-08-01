import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-container">

        <a href="#" className="logo">
          RecruitWithEd
        </a>

        <nav className="nav-links">

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#clients">Clients</a>

          <a href="#certifications">Certifications</a>

          <a href="#contact">Contact</a>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;