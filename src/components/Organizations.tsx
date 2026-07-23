function Organizations() {
  const clientGroups = [
    {
      industry: "💻 Technology, IT Services & Consulting",
      companies: [
        "Accenture",
        "Tata Consultancy Services (TCS)",
        "Tech Mahindra",
        "HCL America",
        "LTIMindtree",
        "Birlasoft",
        "Bahwan CyberTek (BCT)",
        "Cleartelligence",
        "Genpact",
        "Innova Solutions (formerly AIC)",
      ],
    },
    {
      industry: "🏦 Banking & Financial Services",
      companies: [
        "Wells Fargo",
        "Fifth Third Bank",
        "BNP Paribas",
        "Nomura Securities International",
        "Exeter Finance",
      ],
    },
    {
      industry: "🏥 Healthcare, Life Sciences & Health Insurance",
      companies: [
        "AbbVie",
        "Bayer",
        "Blue Cross Blue Shield of Texas",
        "Blue Cross Blue Shield of New York",
        "Blue Cross Blue Shield of Michigan",
        "Blue Cross Blue Shield of Florida",
      ],
    },
    {
      industry: "🛍️ Retail, Apparel & Consumer Goods",
      companies: [
        "Abercrombie & Fitch",
        "Lululemon Athletica",
        "Victoria's Secret",
        "HanesBrands",
        "Kellogg's",
        "Speedway",
      ],
    },
    {
      industry: "🚗 Automotive",
      companies: ["Toyota Motor North America (TMNA)"],
    },
    {
      industry: "✈️ Aviation",
      companies: ["JetBlue Airways"],
    },
    {
      industry: "🏭 Manufacturing & Industrial Engineering",
      companies: [
        "Caterpillar",
        "John Deere",
        "Schneider Electric",
        "Gibson",
      ],
    },
    {
      industry: "📊 Professional Services",
      companies: ["PricewaterhouseCoopers (PwC)"],
    },
    {
      industry: "🎰 Hospitality & Entertainment",
      companies: ["Caesars Entertainment"],
    },
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
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "#38BDF8",
            fontSize: "2.7rem",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Clients I've Supported
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "28px",
          }}
        >
          {clientGroups.map((group) => (
            <div
              key={group.industry}
              style={{
                background: "#111827",
                border: "1px solid #1F2937",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
              }}
            >
              <h3
                style={{
                  color: "#38BDF8",
                  fontSize: "22px",
                  marginBottom: "20px",
                }}
              >
                {group.industry}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {group.companies.map((company) => (
                  <span
                    key={company}
                    style={{
                      background: "#1E293B",
                      color: "#E2E8F0",
                      padding: "10px 14px",
                      borderRadius: "999px",
                      border: "1px solid #334155",
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organizations;