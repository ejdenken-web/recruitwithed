function Navbar() {
  const navItemStyle = {
    cursor: "pointer",
    color: "#E2E8F0",
    textDecoration: "none",
    transition: "0.3s",
    fontSize: "15px",
  };

  return (
    <nav
      style={{
        background: "#111827",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
      }}
    >
      <a
        href="#hero"
        style={{
          color: "#38BDF8",
          margin: 0,
          textDecoration: "none",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        RecruitWithEd
      </a>

      <div
        style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
        }}
      >
        <a href="#about" style={navItemStyle}>
          About
        </a>

        <a href="#why-work-with-me" style={navItemStyle}>
          Why Work With Me
        </a>

        <a href="#certifications" style={navItemStyle}>
          Certifications
        </a>

        <a href="#projects" style={navItemStyle}>
          Featured Projects
        </a>

        <a href="#contact" style={navItemStyle}>
          Let's Connect
        </a>
      </div>
    </nav>
  );
}

export default Navbar;