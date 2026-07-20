function Navbar() {
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
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          margin: 0,
          cursor: "pointer",
        }}
      >
        RecruitWithEd
      </h2>

      <div
        style={{
          display: "flex",
          gap: "28px",
          fontWeight: "500",
        }}
      >
        <span style={{ cursor: "pointer" }}>About</span>
        <span style={{ cursor: "pointer" }}>Why Work With Me</span>
        <span style={{ cursor: "pointer" }}>Certifications</span>
        <span style={{ cursor: "pointer" }}>Featured Projects</span>
        <span style={{ cursor: "pointer" }}>Let's Connect</span>
      </div>
    </nav>
  );
}

export default Navbar;