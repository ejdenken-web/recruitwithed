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
    "Cleartelligence" ,
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
    "Cleartelligence",
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

        <div className="clients-network">

          <div className="network-energy energy-one" />
          <div className="network-energy energy-two" />
          <div className="network-energy energy-three" />

          <div className="network-line line-one" />
          <div className="network-line line-two" />
          <div className="network-line line-three" />
          <div className="network-line line-four" />
          <div className="network-line line-five" />
          <div className="network-line line-six" />

          {clients.map((client, index) => {
            const isActive = activeClient === client;

            return (
              <button
                type="button"
                key={client}
                className={`client-node node-${index + 1}${
                  isActive ? " client-node-active" : ""
                }`}
                onClick={() =>
                  setActiveClient(
                    isActive ? null : client
                  )
                }
                aria-label={`Select ${client}`}
              >
                <span className="node-orb">
                  <span className="node-core" />
                  <span className="node-ring" />
                </span>

                <span className="node-label">
                  {client}
                </span>
              </button>
            );
          })}

        </div>

        <div className="clients-interaction">
          <span className="interaction-dot" />

          <span>
            {activeClient
              ? activeClient
              : "Hover or select an organization"}
          </span>
        </div>

      </div>
    </section>
  );
}

export default Clients;