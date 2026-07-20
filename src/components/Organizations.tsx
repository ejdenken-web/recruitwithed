function Organizations() {
  const companies = [
    "Microsoft",
    "Verizon",
    "Wells Fargo",
    "Fifth Third Bank",
    "Nomura Securities International",
    "BNP Paribas",
    "Adobe",
    "Chevron",
    "PricewaterhouseCoopers (PwC)",
    "Cigna Healthcare",
    "AbbVie",
    "Best Buy",
    "Toyota Motor North America (TMNA)",
    "DoorDash",
    "American Airlines",
    "JetBlue Airways",
    "Abercrombie & Fitch",
    "Lululemon Athletica",
    "Victoria's Secret",
    "HanesBrands",
    "Exeter Finance",
    "Bayer",
    "Accenture",
    "Genpact",
    "Kellogg's",
    "Speedway",
    "Schneider Electric",
    "Walmart",
    "John Deere",
    "Gibson",
    "Caesars Entertainment",
    "Caterpillar",
  ];

  return (
    <section
      id="organizations"
      style={{
        background: "#0B1120",
        color: "white",
        padding: "90px 40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#38BDF8",
          fontSize: "2.6rem",
          marginBottom: "20px",
        }}
      >
        Organizations I've Supported
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 50px",
          color: "#CBD5E1",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        Throughout my recruiting career, I have supported hiring initiatives for
        organizations across technology, financial services, healthcare,
        consulting, retail, manufacturing, aviation, and consumer industries.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {companies.map((company) => (
          <div
            key={company}
            style={{
              background: "#1E293B",
              border: "1px solid #334155",
              borderRadius: "12px",
              padding: "20px",
              color: "#E2E8F0",
              fontSize: "16px",
              fontWeight: "500",
              transition: "0.3s ease",
            }}
          >
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Organizations;