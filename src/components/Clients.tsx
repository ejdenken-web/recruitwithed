import "./Clients.css";

function Clients() {
  const clients = [
    "Abercrombie & Fitch",
    "Lululemon Athletica",
    "Nomura Securities",
    "BNP Paribas",
    "JetBlue Airways",
    "Caterpillar",
    "Capgemini",
    "Infosys",
    "Tata Consultancy Services",
    "Wipro",
    "Cognizant",
    "Accenture",
    "Deloitte",
    "KPMG",
    "PwC",
    "EY",
    "IBM",
    "Microsoft",
    "Oracle",
    "SAP",
    "JPMorgan Chase",
    "Bank of America",
    "Wells Fargo",
    "Citigroup",
    "UnitedHealth Group",
    "CVS Health",
    "Elevance Health",
    "Humana",
    "Kaiser Permanente",
    "General Motors",
    "Ford Motor Company",
    "Honeywell",
    "Siemens",
    "GE Aerospace",
    "Emerson",
    "Schneider Electric",
  ];

  return (
    <section id="clients" className="clients">

      <div className="container">

        <span className="section-tag">
          CLIENTS
        </span>

        <h2 className="section-title">
          Clients I Supported
        </h2>

        <p className="section-description">
          Throughout my recruiting career, I have supported hiring initiatives
          across technology, financial services, healthcare, consulting,
          retail, manufacturing, aviation, and engineering organizations.
        </p>

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