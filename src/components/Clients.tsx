import { useEffect, useState } from "react";
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
    "Nomura Securities International",
    "Photon Infotech",
    "PwC",
    "Schneider Electric",
    "Siemens",
    "Tata Consultancy Services",
    "UnitedHealth Group",
    "Wells Fargo",
  ];

  const [activeClient, setActiveClient] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveClient((current) => (current + 1) % clients.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [clients.length]);

  const surroundingClients = clients.filter(
    (_, index) => index !== activeClient
  );

  const leftClients = surroundingClients.slice(0, 8);
  const rightClients = surroundingClients.slice(8, 16);
  const bottomClients = surroundingClients.slice(16, 24);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-light clients-light-one" />
      <div className="clients-light clients-light-two" />

      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">CLIENTS</span>
        </div>

        <div className="clients-showcase">

          {/* LEFT CLIENTS */}

          <div className="clients-column clients-column-left">
            {leftClients.map((client) => (
              <button
                className="client-tile"
                key={client}
                onMouseEnter={() =>
                  setActiveClient(clients.indexOf(client))
                }
              >
                <span className="client-tile-dot" />
                <span>{client}</span>
              </button>
            ))}
          </div>

          {/* CENTER SPOTLIGHT */}

          <div className="client-spotlight">

            <div className="spotlight-ring spotlight-ring-one" />
            <div className="spotlight-ring spotlight-ring-two" />

            <div className="spotlight-content">

              <span className="spotlight-label">
                CLIENT SPOTLIGHT
              </span>

              <div className="spotlight-icon">
                ✦
              </div>

              <h2 key={clients[activeClient]}>
                {clients[activeClient]}
              </h2>

              <p>
                Professional recruiting and talent acquisition
                engagement.
              </p>

            </div>

          </div>

          {/* RIGHT CLIENTS */}

          <div className="clients-column clients-column-right">
            {rightClients.map((client) => (
              <button
                className="client-tile"
                key={client}
                onMouseEnter={() =>
                  setActiveClient(clients.indexOf(client))
                }
              >
                <span className="client-tile-dot" />
                <span>{client}</span>
              </button>
            ))}
          </div>

        </div>

        {/* BOTTOM CLIENTS */}

        <div className="clients-bottom-grid">
          {bottomClients.map((client) => (
            <button
              className="client-tile"
              key={client}
              onMouseEnter={() =>
                setActiveClient(clients.indexOf(client))
              }
            >
              <span className="client-tile-dot" />
              <span>{client}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Clients;