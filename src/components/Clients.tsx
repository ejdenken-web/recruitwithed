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
  ];

  return (
    <section id="clients" className="clients">
      <div className="container">

        <span className="section-tag">
          CLIENTS
        </span>

        <h2 className="section-title">
          Organizations I Have Supported
        </h2>

        <p className="section-description">
          Throughout my recruiting career, I have supported hiring initiatives
          across Fortune 500 companies, consulting firms, financial institutions,
          engineering organizations, healthcare, retail and manufacturing.
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