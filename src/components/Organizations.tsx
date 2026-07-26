import "./Clients.css";

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
    "TCS",
    "Tech Mahindra",
    "Toyota",
    "Victoria's Secret",
    "Wells Fargo",
  ];

  return (
    <section
      id="clients"
      className="clients-section"
    >
      <div className="clients-header">

        <h2>Clients</h2>

        <p>
          Over the course of my recruiting career, I have partnered with
          organizations across technology, financial services, healthcare,
          manufacturing, consulting, aviation, retail, and consumer goods,
          supporting hiring initiatives for technical and professional talent.
        </p>

      </div>

      <div className="clients-grid">

        {companies.map((company) => (

          <div
            key={company}
            className="client-card"
          >
            {company}
          </div>

        ))}

      </div>

    </section>
  );
}

export default Organizations;