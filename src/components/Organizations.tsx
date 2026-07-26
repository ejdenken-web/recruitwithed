function Organizations() {
  const companies = [
    "Accenture",
    "AbbVie",
    "Abercrombie & Fitch",
    "Bahwan CyberTek",
    "Bayer",
    "Birlasoft",
    "Blue Cross Blue Shield",
    "BNP Paribas",
    "Caterpillar",
    "Cleartelligence",
    "Exeter Finance",
    "Fifth Third Bank",
    "Genpact",
    "Gibson",
    "HanesBrands",
    "HCL America",
    "Innova Solutions",
    "JetBlue Airways",
    "John Deere",
    "Kellogg's",
    "LTIMindtree",
    "Lululemon",
    "Nomura",
    "PwC",
    "Schneider Electric",
    "Speedway",
    "Tata Consultancy Services",
    "Tech Mahindra",
    "Toyota",
    "Victoria's Secret",
    "Wells Fargo",
  ];

  return (
    <section className="clients-section" id="clients">

      <div className="section-header">

        <p className="section-tag">
          CLIENTS
        </p>

        <h2>
          Organizations I've Supported
        </h2>

        <p className="section-description">
          Throughout my recruiting career, I have partnered with global
          organizations across technology, banking, healthcare,
          manufacturing, retail, aviation, engineering, and consulting.
        </p>

      </div>

      <div className="clients-grid">

        {companies.map((company) => (

          <div className="client-card" key={company}>

            {company}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Organizations;