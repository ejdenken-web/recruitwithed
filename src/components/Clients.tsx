import { useEffect, useRef } from "react";
import "./Clients.css";

function Clients() {
  const sceneRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const scene = sceneRef.current;

      if (!scene) return;

      const section = scene.parentElement;

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalDistance =
        section.offsetHeight - viewportHeight;

      const progress = Math.min(
        1,
        Math.max(
          0,
          -rect.top / Math.max(totalDistance, 1)
        )
      );

      scene.style.setProperty(
        "--camera-progress",
        progress.toString()
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="clients"
      className="clients-section"
    >
      <div className="clients-camera">

        <div className="clients-header">
          <span className="section-tag">
            CLIENTS I'VE SUPPORTED
          </span>
        </div>

        <div
          ref={sceneRef}
          className="clients-scene"
        >
          <div className="clients-skyline">

            {clients.map((client, index) => {
              const buildingHeight =
                150 + ((index * 47) % 230);

              const lane =
                (index % 5) - 2;

              const depth =
                Math.floor(index / 5);

              const horizontalOffset =
                (index % 7) * 13 - 39;

              return (
                <div
                  key={client}
                  className={`client-building client-building-${index + 1}`}
                  style={
                    {
                      "--building-height": `${buildingHeight}px`,
                      "--building-lane": lane,
                      "--building-depth": depth,
                      "--building-offset": `${horizontalOffset}px`,
                    } as React.CSSProperties
                  }
                >
                  <div className="building-side building-side-left" />

                  <div className="building-front">

                    <div className="building-windows">
                      {Array.from(
                        { length: 18 },
                        (_, windowIndex) => (
                          <span
                            key={windowIndex}
                            className={
                              windowIndex % 7 ===
                              index % 7
                                ? "window-lit"
                                : ""
                            }
                          />
                        )
                      )}
                    </div>

                    <span className="building-name">
                      {client}
                    </span>

                  </div>

                  <div className="building-side building-side-right" />
                </div>
              );
            })}

          </div>

          <div className="clients-horizon" />
          <div className="clients-ground" />

        </div>
      </div>
    </section>
  );
}

export default Clients;