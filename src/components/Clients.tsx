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
    "Cleartelligence",
  ];

  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  const handleClientClick = (client: string) => {
    setSelectedClient((current) =>
      current === client ? null : client
    );
  };

  return (
    <section id="clients" className="clients-section">
      <div className="clients-background-orb clients-orb-one" />
      <div className="clients-background-orb clients-orb-two" />

      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">CLIENTS</span>

          <h2>
            Organizations I've <span>Supported.</span>
          </h2>

          <p>
            A selection of organizations supported through recruiting,
            talent acquisition, and professional staffing engagements.
          </p>
        </div>

        <div className="clients-wall">

          <div className="clients-wall-line line-a" />
          <div className="clients-wall-line line-b" />
          <div className="clients-wall-line line-c" />

          {clients.map((client, index) => {
            const isSelected = selectedClient === client;
            const isHovered = hoveredClient === client;

            return (
              <button
                type="button"
                key={client}
                className={`client-tile client-tile-${(index % 12) + 1}${
                  isSelected ? " client-selected" : ""
                }${isHovered ? " client-hovered" : ""}`}
                onClick={() => handleClientClick(client)}
                onMouseEnter={() => setHoveredClient(client)}
                onMouseLeave={() => setHoveredClient(null)}
                aria-pressed={isSelected}
              >
                <span className="client-tile-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="client-tile-name">
                  {client}
                </span>

                <span className="client-tile-arrow">
                  ↗
                </span>

                <span className="client-tile-shine" />
              </button>
            );
          })}
        </div>

        <div
          className={`client-focus ${
            selectedClient ? "client-focus-visible" : ""
          }`}
        >
          <div className="client-focus-label">
            SELECTED ORGANIZATION
          </div>

          <div className="client-focus-content">
            <strong>
              {selectedClient || "Explore the organizations"}
            </strong>

            {selectedClient && (
              <button
                type="button"
                className="client-focus-close"
                onClick={() => setSelectedClient(null)}
                aria-label="Close selected organization"
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className="clients-footer-note">
          <span className="clients-live-dot" />
          <span>
            Hover to explore • Click to focus
          </span>
        </div>

      </div>
    </section>
  );
}

export default Clients;