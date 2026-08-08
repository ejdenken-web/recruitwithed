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
    "Microsoft",
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
          CLIENTS
        </span>
      </div>

      <div className="marquee">

        <div className="marquee-track">

          {[...firstRow, ...firstRow].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="client-card"
            >
              {client}
            </div>
          ))}

        </div>

      </div>

      <div className="marquee reverse">

        <div className="marquee-track">

          {[...secondRow, ...secondRow].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="client-card"
            >
              {client}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Clients;