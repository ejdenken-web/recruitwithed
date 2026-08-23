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
      setDirection("right");

      setActiveClient((current) =>
        current === clients.length - 1 ? 0 : current + 1
      );
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

          <button
            className="client-arrow client-arrow-left"
            onClick={previousClient}
            aria-label="Previous client"
          >
            ←
          </button>

          <div className="client-slide-area">

            <div
              key={`${activeClient}-${direction}`}
              className={`client-slide client-slide-${direction}`}
            >

              <div className="client-feature-card">

                <div className="client-feature-glow" />

                <div className="client-feature-content">

                  <div className="client-feature-icon">
                    ✦
                  </div>

                  <h2 className="client-name">
                    {clients[activeClient]}
                  </h2>


                </div>

              </div>

            </div>

          </div>

          <button
            className="client-arrow client-arrow-right"
            onClick={nextClient}
            aria-label="Next client"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Clients;