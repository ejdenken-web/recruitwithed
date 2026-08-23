import "./Clients.css";

function Clients() {
  const clients = [
    "Abercrombie & Fitch",
    "Accenture",
    "AIC",
    "Bank of America",
    "BCT",
    "BNP Paribas",
    "Birlasoft",
    "Capgemini",
    "Caterpillar",
    "Citigroup",
    "Cleartelligence",
    "Cognizant",
    "CVS Health",
    "Deloitte",
    "EY",
    "Ford Motor Company",
    "GE Aerospace",
    "General Motors",
    "Honeywell",
    "Humana",
    "IBM",
    "Infosys",
    "JetBlue Airways",
    "JPMorgan Chase",
    "Kaiser Permanente",
    "KPMG",
    "Lululemon Athletica",
    "Nomura Securities International",
    "Photon Infotech",
    "PwC",
    "Schneider Electric",
    "Siemens",
    "Tata Consultancy Services",
    "UnitedHealth Group",
    "Wells Fargo",
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="clients-glow clients-glow-one" />
      <div className="clients-glow clients-glow-two" />

      <div className="clients-container">
        <div className="clients-header">
          <span className="section-tag">CLIENTS</span>

          <h2>
            Organizations That
            <span> Matter.</span>
          </h2>

          <p>
            A selection of organizations supported through recruiting,
            talent acquisition, and professional staffing engagements.
          </p>
        </div>

        <div className="clients-cloud">
          {clients.map((client, index) => (
            <div
              className={`client-pill client-pill-${(index % 8) + 1}`}
              key={client}
              style={
                {
                  "--delay": `${index * 0.05}s`,
                } as React.CSSProperties
              }
            >
              <span className="client-dot" />
              <span>{client}</span>
            </div>
          ))}
        </div>

        <div className="clients-bottom-line">
          <span />
          <p>35 organizations supported</p>
          <span />
        </div>
      </div>
    </section>
  );
}

export default Clients;