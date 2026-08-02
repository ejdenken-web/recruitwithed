import "./Clients.css";

function Clients() {
  const clients = [
    "Abercrombie & Fitch",
    "Accenture",
    "AIC",
    "Bank of America",
    "BNP Paribas",
    "Capgemini",
    "Caterpillar",
    "Citigroup",
    "Cognizant",
    "CVS Health",
    "Deloitte",
    "Elevance Health",
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
    "Nomura Securities",
    "Photon Infotech",
    "PwC",
    "Schneider Electric",
    "Siemens",
    "Tata Consultancy Services",
    "UnitedHealth Group",
    "Wells Fargo"
  ];

  return (
    <section id="clients" className="clients">

      <div className="container">

        <div className="clients-grid">

          {clients.map((client) => (
            <div
              key={client}
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