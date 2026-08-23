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

  const firstRow = clients.slice(0, 18);
  const secondRow = clients.slice(18);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">CLIENTS</span>
        </div>

        <div className="clients-moving-wall">

          <div className="client-track">
            <div className="client-row client-row-left">
              {[...firstRow, ...firstRow].map((client, index) => (
                <div
                  className="client-pill"
                  key={`top-${client}-${index}`}
                >
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="client-track">
            <div className="client-row client-row-right">
              {[...secondRow, ...secondRow].map((client, index) => (
                <div
                  className="client-pill"
                  key={`bottom-${client}-${index}`}
                >
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Clients;