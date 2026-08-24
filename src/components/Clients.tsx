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
    const timer = window.setInterval(() => {
      setDirection("right");

      setActiveClient((current) =>
        current === clients.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">

        <div className="clients-header">
          <span className="section-tag">CLIENTS</span>
        </div>

        <div className="client-carousel">

          <button
            type="button"
            className="client-arrow"
            onClick={previousClient}
            aria-label="Previous client"
          >
            ←
          </button>

          <div className="client-box">

            <div
              key={`${activeClient}-${direction}`}
              className={`client-name client-name-${direction}`}
            >
              {clients[activeClient]}
            </div>

          </div>

          <button
            type="button"
            className="client-arrow"
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