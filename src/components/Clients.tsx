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

  const firstRow = clients.slice(0, 18);
  const secondRow = clients.slice(18);

  return (
    <section id="clients" className="clients-section">

      <div className="clients-glow clients-glow-one" />
      <div className="clients-glow clients-glow-two" />

      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">CLIENTS</span>
        </div>

        <div className="clients-moving-wall">

          {/* ROW ONE */}

          <div className="client-track">

            <div className="client-row">

              {[...firstRow, ...firstRow].map(
                (client, index) => (
                  <div
                    className="client-pill"
                    key={`row-one-${client}-${index}`}
                  >
                    <span className="client-dot" />
                    <span>{client}</span>
                  </div>
                )
              )}

            </div>

          </div>

          {/* ROW TWO */}

          <div className="client-track">

            <div className="client-row client-row-two">

              {[...secondRow, ...secondRow].map(
                (client, index) => (
                  <div
                    className="client-pill"
                    key={`row-two-${client}-${index}`}
                  >
                    <span className="client-dot" />
                    <span>{client}</span>
                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Clients;