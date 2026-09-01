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
    "Manthan Systems",
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
      <div className="clients-header">
        <span className="section-tag">
          CLIENTS I'VE SUPPORTED
        </span>
      </div>

      <div className="clients-marquee">

        {/* ROW 1 — LEFT TO RIGHT */}
        <div className="clients-row clients-row-left">
          <div className="clients-track">
            {[...firstRow, ...firstRow].map((client, index) => (
              <span
                className="client-chip"
                key={`row-one-${client}-${index}`}
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* ROW 2 — RIGHT TO LEFT */}
        <div className="clients-row clients-row-right">
          <div className="clients-track">
            {[...secondRow, ...secondRow].map((client, index) => (
              <span
                className="client-chip"
                key={`row-two-${client}-${index}`}
              >
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Clients;