function Impact() {
  return (
    <section
      style={{
        background: "#0F172A",
        color: "white",
        padding: "clamp(70px, 10vw, 90px) 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          fontSize: "clamp(2rem, 5vw, 2.5rem)",
          marginBottom: "45px",
        }}
      >
        Impact at a Glance
      </h2>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {/* Experience */}
        <div
          style={{
            background: "#111827",
            padding: "35px 30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(2rem, 6vw, 2.8rem)",
              color: "#38BDF8",
              marginBottom: "12px",
            }}
          >
            10+
          </h3>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "clamp(16px, 2vw, 18px)",
              margin: 0,
            }}
          >
            Years of Experience
          </p>
        </div>

        {/* Leadership */}
        <div
          style={{
            background: "#111827",
            padding: "35px 30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(2rem, 6vw, 2.8rem)",
              color: "#38BDF8",
              marginBottom: "12px",
            }}
          >
            6–40
          </h3>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "clamp(16px, 2vw, 18px)",
              margin: 0,
            }}
          >
            Recruiters Managed & Mentored
          </p>
        </div>

        {/* Global Reach */}
        <div
          style={{
            background: "#111827",
            padding: "35px 30px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.7rem, 5vw, 2.2rem)",
              color: "#38BDF8",
              marginBottom: "15px",
            }}
          >
            Global Reach
          </h3>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "clamp(16px, 2vw, 18px)",
              margin: 0,
            }}
          >
            North America • Japan • India
          </p>
        </div>
      </div>
    </section>
  );
}

export default Impact;