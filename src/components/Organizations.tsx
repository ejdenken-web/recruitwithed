function Organizations() {
  const companies = [
    "Microsoft",
    "Verizon",
    "Wells Fargo",
    "Fifth Third Bank",
    "Nomura Securities International",
    "BNP Paribas",
    "Adobe" ,
    "Chevron" ,
    "PricewaterhouseCoopers (PwC)",
    "Cigna Healthcare",
    "AbbVie" ,
    "Best Buy" ,
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
    "Kelloggs" ,
    "Speedway" ,
    "Schneider Electric" ,
    "Walmart" ,
    "John Deere" ,
    "Gibson" ,
    "Caesars Entertainment" , 
    "Caterpillar",
    
    
    
  ];

  return (
    <section
      id="organizations"
      style={{
        background: "#0B1120",
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
        Organizations I've Supported
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {companies.map((company, index) => (
          <div
            key={index}
            style={{
              background: "#1E293B",
              padding: "20px",
              borderRadius: "12px",
              color: "#CBD5E1",
              fontSize: "16px",
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