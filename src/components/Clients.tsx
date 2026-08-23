import { useState } from "react";
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

  const [activeClient, setActiveClient] = useState<string | null>(null);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">
            CLIENTS
          </span>

          <h2>
            Organizations I've{" "}
            <span>Supported.</span>
          </h2>

          <p>
            A selection of organizations supported through
            recruiting, talent acquisition, and professional
            staffing engagements.
          </p>
        </div>

        <div className="clients-cloud">
          {clients.map((client, index) => (
            <button
              type="button"
              key={client}
              className={`client-orbit client-orbit-${index + 1}${
                activeClient === client ? " selected" : ""
              }`}
              onClick={() =>
                setActiveClient(
                  activeClient === client ? null : client
                )
              }
            >
              <span className="client-orbit-dot" />
              <span>{client}</span>
            </button>
          ))}
        </div>

        <div className="clients-footer">
          <span>
            {activeClient
              ? `Selected: ${activeClient}`
              : "Select an organization"}
          </span>
        </div>

      </div>
    </section>
  );
}

export default Clients;