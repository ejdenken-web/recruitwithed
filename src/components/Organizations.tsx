function Organizations() {
  const companies = [
    "Accenture",
    "AbbVie",
    "Abercrombie & Fitch",
    "Bahwan CyberTek (BCT)",
    "Bayer",
    "Birlasoft",
    "Blue Cross Blue Shield of Florida",
    "Blue Cross Blue Shield of Michigan",
    "Blue Cross Blue Shield of New York",
    "Blue Cross Blue Shield of Texas",
    "BNP Paribas",
    "Caterpillar",
    "Cleartelligence",
    "Exeter Finance",
    "Fifth Third Bank",
    "Genpact",
    "Gibson",
    "HanesBrands",
    "HCL America",
    "Innova Solutions (formerly AIC)",
    "JetBlue Airways",
    "John Deere",
    "Kellogg's",
    "LTIMindtree",
    "Lululemon Athletica",
    "Nomura Securities International",
    "PricewaterhouseCoopers (PwC)",
    "Schneider Electric",
    "Speedway",
    "Tata Consultancy Services (TCS)",
    "Tech Mahindra",
    "Toyota Motor North America (TMNA)",
    "Victoria's Secret",
    "Wells Fargo",
  ];

  return (
    <section
      id="clients"
      style={{
        background: "#0B1120",
        color: "white",
        padding: "clamp(70px, 10vw, 90px) 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#38BDF8",
            fontSize: "clamp(2rem, 5vw, 2.7rem)",
            marginBottom: "50px",
          }}
        >
          Clients I've Supported
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {companies.map((company) => (
            <div
              key={company}
              style={{
                background: "#111827",
                border: "1px solid #334155",
                borderRadius: "999px",
                padding: "12px 20px",
                color: "#E2E8F0",
                fontSize: "clamp(14px, 1.8vw, 16px)",
                fontWeight: 500,
                whiteSpace: "nowrap",
                boxShadow: "0 8px 20px rgba(0,0,0,0.20)",
              }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizations;