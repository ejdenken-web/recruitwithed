function Organizations() {
  const companies = [
    "Accenture",
    "Tata Consultancy Services (TCS)",
    "Tech Mahindra",
    "HCL America",
    "LTIMindtree",
    "Birlasoft",
    "Bahwan CyberTek (BCT)",
    "Cleartelligence",
    "Genpact",
    "Bayer",
    "AbbVie",
    "PricewaterhouseCoopers (PwC)",
    "Nomura Securities International",
    "BNP Paribas",
    "Wells Fargo",
    "Fifth Third Bank",
    "Toyota Motor North America (TMNA)",
    "JetBlue Airways",
    "Abercrombie & Fitch",
    "Lululemon Athletica",
    "Victoria's Secret",
    "HanesBrands",
    "Exeter Finance",
    "Kellogg's",
    "Speedway",
    "Schneider Electric",
    "John Deere",
    "Gibson",
    "Caesars Entertainment",
    "Caterpillar",
  ];

  return (
    <section
      id="clients"
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
          marginBottom: "50px",
        }}
      >
        Clients I've Supported
      </h2>

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