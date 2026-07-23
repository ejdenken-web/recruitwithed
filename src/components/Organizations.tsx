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
        padding: "90px 40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#38BDF8",
            fontSize: "2.7rem",
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
            gap: "14px",
          }}
        >
          {companies.map((company) => (
            <div
              key={company}
              style={{
                background: "#111827",
                border: "1px solid #334155",
                borderRadius: "999px",
                padding: "10px 18px",
                color: "#E2E8F0",
                fontSize: "15px",
                fontWeight: "500",
                whiteSpace: "nowrap",
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