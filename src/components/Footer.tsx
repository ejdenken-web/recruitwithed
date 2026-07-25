function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#020617",
        color: "#CBD5E1",
        padding: "clamp(70px, 10vw, 90px) 20px 40px",
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
            borderTop: "1px solid #1E293B",
            marginBottom: "50px",
          }}
        />

        <h2
          style={{
            color: "#38BDF8",
            fontSize: "clamp(2rem, 5vw, 2.3rem)",
            marginBottom: "20px",
          }}
        >
          Let's Connect
        </h2>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "1.9",
            maxWidth: "700px",
            margin: "0 auto 35px",
          }}
        >
          Whether you're looking for a Technical Recruiter, discussing talent
          acquisition strategies, or simply want to connect with a fellow
          recruiting professional, I'd be happy to hear from you.
        </p>

        <a
          href="mailto:recruitwithed@gmail.com"
          style={{
            display: "inline-block",
            background: "#38BDF8",
            color: "#0B1120",
            padding: "14px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "clamp(15px, 2vw, 17px)",
            marginBottom: "45px",
            boxShadow: "0 10px 25px rgba(56,189,248,0.25)",
          }}
        >
          recruitwithed@gmail.com
        </a>

        <p
          style={{
            marginTop: "10px",
            color: "#64748B",
            fontSize: "clamp(13px, 2vw, 14px)",
            lineHeight: "1.8",
          }}
        >
          © 2026 Ed Johnson. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;