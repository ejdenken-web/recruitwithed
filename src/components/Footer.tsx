function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#020617",
        color: "#CBD5E1",
        padding: "70px 30px 40px",
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
            fontSize: "2.3rem",
            marginBottom: "20px",
          }}
        >
          Let's Connect
        </h2>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "18px",
            lineHeight: "1.8",
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
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          recruitwithed@gmail.com
        </a>

        <p
          style={{
            color: "#94A3B8",
            fontSize: "15px",
            lineHeight: "1.8",
            marginTop: "10px",
          }}
        >
          
        </p>

        <p
          style={{
            marginTop: "25px",
            color: "#64748B",
            fontSize: "14px",
          }}
        >
          © 2026 Ed Johnson. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;