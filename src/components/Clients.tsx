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
            Organizations I've <span>Supported.</span>
          </h2>

          <p>
            A selection of organizations supported through
            recruiting, talent acquisition, and professional
            staffing engagements.
          </p>
        </div>

        <div className="clients-wall">

          <div className="clients-wall-line line-one" />
          <div className="clients-wall-line line-two" />
          <div className="clients-wall-line line-three" />

          {clients.map((client, index) => {
            const isActive = activeClient === client;

            return (
              <button
                type="button"
                key={client}
                className={`client-tile client-tile-${index + 1}${
                  isActive ? " selected" : ""
                }`}
                onClick={() =>
                  setActiveClient(
                    isActive ? null : client
                  )
                }
              >
                <span className="client-index">
                  {(index + 1)
                    .toString()
                    .padStart(2, "0")}
                </span>

                <span className="client-tile-name">
                  {client}
                </span>

                <span className="client-arrow">
                  ↗
                </span>
              </button>
            );
          })}

        </div>

        <div
          className={`client-focus ${
            activeClient ? "visible" : ""
          }`}
        >
          <span>SELECTED ORGANIZATION</span>

          <strong>
            {activeClient || "Explore the organizations"}
          </strong>

          <button
            type="button"
            onClick={() => setActiveClient(null)}
            aria-label="Clear selected organization"
          >
            ×
          </button>
        </div>

      </div>
    </section>
  );
}

export default Clients;