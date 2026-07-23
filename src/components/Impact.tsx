function Impact() {
  return (
    <section
      style={{
        background: "#0F172A",
        color: "white",
        padding: "70px 30px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          fontSize: "2.5rem",
          marginBottom: "40px",
        }}
      >
        Impact at a Glance
      </h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {/* Experience */}
        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            width: "280px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              color: "#38BDF8",
              marginBottom: "10px",
            }}
          >
            10+
          </h3>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "1.1rem",
            }}
          >
            Years of Experience
          </p>
        </div>

        {/* Leadership */}
        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            width: "280px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              color: "#38BDF8",
              marginBottom: "10px",
            }}
          >
            6–40
          </h3>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "1.1rem",
            }}
          >
            Recruiters Managed & Mentored
          </p>
        </div>

        {/* Global Reach */}
        <div
          style={{
            background: "#111827",
            padding: "30px",
            borderRadius: "16px",
            width: "600px",
            maxWidth: "90%",
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              color: "#38BDF8",
              marginBottom: "15px",
            }}
          >
            Global Reach
          </h3>

          <p
            style={{
              color: "#CBD5E1",
              fontSize: "1.1rem",
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