import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import RecruitingPlatforms from "./components/RecruitingPlatforms";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

import "./App.css";

type View =
  | "about"
  | "clients"
  | "recruiting-platforms"
  | "certifications"
  | "projects"
  | "tech-stack"
  | "lets-connect";

function App() {
  const [view, setView] = useState<View>("about");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    const validViews: View[] = [
      "about",
      "clients",
      "recruiting-platforms",
      "certifications",
      "projects",
      "tech-stack",
      "lets-connect",
    ];

    if (validViews.includes(hash as View)) {
      setView(hash as View);
    }
  }, []);

  const changeView = (nextView: View) => {
    setView(nextView);

    window.history.replaceState(
      null,
      "",
      `#${nextView}`
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <Navbar
        activeView={view}
        onNavigate={changeView}
      />

      <main>
        {view === "about" && <Hero />}

        {view === "clients" && <Clients />}

        {view === "recruiting-platforms" && (
          <RecruitingPlatforms />
        )}

        {view === "certifications" && (
          <Certifications />
        )}

        {view === "projects" && <Projects />}

        {view === "tech-stack" && <TechStack />}

        {view === "lets-connect" && <Footer />}
      </main>
    </div>
  );
}

export default App;