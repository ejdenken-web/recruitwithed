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

  const [cameraProgress, setCameraProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("clients");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalDistance = rect.height - viewportHeight;

      if (totalDistance <= 0) {
        setCameraProgress(0);
        return;
      }

      const progress = Math.min(
        1,
        Math.max(0, -rect.top / totalDistance)
      );

      setCameraProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="clients" className="clients-section">
      <div className="clients-camera">
        <div className="clients-header">
          <span className="section-tag">CLIENTS I’VE SUPPORTED</span>
        </div>

        <div
          className="clients-city"
          style={{
            transform: `
              translate3d(
                ${cameraProgress * -220}px,
                0,
                0
              )
              rotateY(${cameraProgress * -7}deg)
            `,
          }}
        >
          {clients.map((client, index) => {
            const height = 150 + ((index * 47) % 180);
            const depth = 90 + ((index * 31) % 55);

            return (
              <div
                className="client-building"
                key={client}
                style={{
                  height: `${height}px`,
                  width: `${depth}px`,
                }}
              >
                <div className="building-side building-side-left" />
                <div className="building-side building-side-right" />

                <div className="building-front">
                  <div className="building-windows">
                    {Array.from({ length: 12 }, (_, windowIndex) => (
                      <span
                        key={windowIndex}
                        className={
                          (windowIndex + index) % 4 === 0
                            ? "window-lit"
                            : ""
                        }
                      />
                    ))}
                  </div>

                  <div className="building-name">
                    {client}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="clients-ground" />
      </div>
    </section>
  );
}

export default Clients;