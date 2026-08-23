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

  const [activeClient, setActiveClient] = useState("Abercrombie & Fitch");

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

        <div className="client-constellation">

          <div className="constellation-glow" />

          <div className="constellation-orbit orbit-one" />
          <div className="constellation-orbit orbit-two" />
          <div className="constellation-orbit orbit-three" />

          <div className="constellation-center">
            <span className="center-pulse" />

            <small>CLIENT</small>

            <strong>
              {activeClient}
            </strong>
          </div>

          {clients.map((client, index) => {
            const isActive = client === activeClient;

            return (
              <button
                type="button"
                key={client}
                className={`floating-client floating-client-${index + 1}${
                  isActive ? " active" : ""
                }`}
                onClick={() => setActiveClient(client)}
                aria-label={`Select ${client}`}
              >
                <span className="client-node" />

                <span className="client-name">
                  {client}
                </span>
              </button>
            );
          })}

        </div>

        <div className="client-selector">
          {clients.map((client) => (
            <button
              type="button"
              key={client}
              className={
                client === activeClient
                  ? "client-selector-dot active"
                  : "client-selector-dot"
              }
              onClick={() => setActiveClient(client)}
              aria-label={`Select ${client}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;