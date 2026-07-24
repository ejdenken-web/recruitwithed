function Navbar() {
  const navItemStyle = {
    cursor: "pointer",
    color: "#E2E8F0",
    textDecoration: "none",
    transition: "0.3s",
    fontSize: "clamp(14px, 1.5vw, 15px)",
    whiteSpace: "nowrap" as const,
  };

  return (
    <nav
      style={{
        background: "#111827",
        color: "white",
        padding: "16px clamp(20px, 5vw, 40px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
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
          textDecoration: "none",
          fontSize: "clamp(22px, 3vw, 26px)",
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
      >
        RecruitWithEd
      </a>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flex: 1,
        }}
      >
        <a href="#about" style={navItemStyle}>
          About
        </a>

        <a href="#why-work-with-me" style={navItemStyle}>
          Why Work With Me
        </a>

        <a href="#clients" style={navItemStyle}>
          Clients
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