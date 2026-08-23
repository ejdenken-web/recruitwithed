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

  const leftClients = clients.slice(0, 18);
  const rightClients = clients.slice(18);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-glow clients-glow-one" />
      <div className="clients-glow clients-glow-two" />

      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">CLIENTS</span>

          <h2>
            Organizations That
            <span> Matter.</span>
          </h2>

          <p>
            A selection of organizations supported through recruiting,
            talent acquisition, and professional staffing engagements.
          </p>
        </div>

        <div className="clients-moving-wall">

          {/* LEFT MOVING ROWS */}

          <div className="client-track client-track-left">

            <div className="client-row client-row-left">
              {[...leftClients, ...leftClients].map((client, index) => (
                <div
                  className="client-pill"
                  key={`left-${client}-${index}`}
                >
                  <span className="client-dot" />
                  <span>{client}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="client-track client-track-left client-track-left-slow">

            <div className="client-row client-row-left-slow">
              {[...rightClients, ...rightClients].map((client, index) => (
                <div
                  className="client-pill"
                  key={`left-slow-${client}-${index}`}
                >
                  <span className="client-dot" />
                  <span>{client}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT MOVING ROWS */}

          <div className="client-track client-track-right">

            <div className="client-row client-row-right">
              {[...rightClients, ...rightClients].map((client, index) => (
                <div
                  className="client-pill"
                  key={`right-${client}-${index}`}
                >
                  <span className="client-dot" />
                  <span>{client}</span>
                </div>
              ))}
            </div>

          </div>

          <div className="client-track client-track-right client-track-right-slow">

            <div className="client-row client-row-right-slow">
              {[...leftClients, ...leftClients].map((client, index) => (
                <div
                  className="client-pill"
                  key={`right-slow-${client}-${index}`}
                >
                  <span className="client-dot" />
                  <span>{client}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        <div className="clients-bottom-line">
          <span />
          <p>35 organizations supported</p>
          <span />
        </div>

      </div>
    </section>
  );
}

export default Clients;