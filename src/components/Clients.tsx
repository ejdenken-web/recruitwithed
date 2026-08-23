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
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextClient = () => {
    setDirection("right");

    setActiveClient((current) =>
      current === clients.length - 1 ? 0 : current + 1
    );
  };

  const previousClient = () => {
    setDirection("left");

    setActiveClient((current) =>
      current === 0 ? clients.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      nextClient();
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="clients-section">

      <div className="clients-light clients-light-one" />
      <div className="clients-light clients-light-two" />

      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">
            CLIENTS
          </span>
        </div>

        <div className="client-carousel">

          {/* LEFT ARROW */}

          <button
            className="client-arrow client-arrow-left"
            onClick={previousClient}
            aria-label="Previous client"
          >
            ←
          </button>

          {/* MAIN CLIENT */}

          <div className="client-slide-area">

            <div
              key={`${activeClient}-${direction}`}
              className={`client-slide client-slide-${direction}`}
            >

              <h2 className="client-name">
                {clients[activeClient]}
              </h2>

              <div className="client-feature-card">

                <div className="client-feature-glow" />

                <div className="client-feature-content">

                  <div className="client-feature-icon">
                    ✦
                  </div>

                  <div className="client-feature-line" />

                  <p>
                    Professional recruiting engagement
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT ARROW */}

          <button
            className="client-arrow client-arrow-right"
            onClick={nextClient}
            aria-label="Next client"
          >
            →
          </button>

        </div>

        {/* PROGRESS */}

        <div className="client-progress">

          <span className="client-progress-current">
            {String(activeClient + 1).padStart(2, "0")}
          </span>

          <div className="client-progress-bar">
            <div
              className="client-progress-fill"
              style={{
                width: `${((activeClient + 1) / clients.length) * 100}%`,
              }}
            />
          </div>

          <span className="client-progress-total">
            {String(clients.length).padStart(2, "0")}
          </span>

        </div>

      </div>

    </section>
  );
}

export default Clients;