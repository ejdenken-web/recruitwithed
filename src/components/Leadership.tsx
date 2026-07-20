function Leadership() {
  const leadershipPoints = [
    "10+ Years Leadership Experience",
    "Led Recruiting & Operations Teams",
    "Managed Teams Ranging From 6–40 Professionals",
    "Mentored Recruiters And Supported Professional Growth",
    "Improved Recruiting Operations And Workflows",
    "Built High-Performing Teams Through Collaboration",
  ];

  return (
    <section
      id="leadership"
      style={{
        background: "#111827",
        color: "white",
        padding: "80px 40px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          fontSize: "2.5rem",
          marginBottom: "40px",
        }}
      >
        Leadership & Operations
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {leadershipPoints.map((point, index) => (
          <div
            key={index}
            style={{
              marginBottom: "25px",
              padding: "20px",
              background: "#1E293B",
              borderRadius: "12px",
              color: "#CBD5E1",
              fontSize: "18px",
            }}
          >
            {point}

            {index !== leadershipPoints.length - 1 && (
              <div
                style={{
                  color: "#38BDF8",
                  marginTop: "20px",
                  fontSize: "24px",
                }}
              >
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;