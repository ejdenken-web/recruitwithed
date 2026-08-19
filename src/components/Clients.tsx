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

  const scrollingClients = [...clients, ...clients];

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">
            CLIENTS
          </span>
        </div>

        <div className="clients-marquee">
          <div className="clients-track">
            {scrollingClients.map((client, index) => (
              <div
                className="client-item"
                key={`${client}-${index}`}
              >
                <span className="client-dot" />
                <span>{client}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Clients;