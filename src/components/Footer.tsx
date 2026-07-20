function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        color: "#CBD5E1",
        padding: "50px 30px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #1F2937",
            marginBottom: "30px",
          }}
        />

        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#94A3B8",
            marginBottom: "20px",
          }}
        >
          Website designed with <strong>React</strong> and developed using{" "}
          <strong>AI-assisted coding</strong> to deliver a modern, responsive,
          and user-friendly portfolio experience.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#64748B",
          }}
        >
          © 2026 Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;