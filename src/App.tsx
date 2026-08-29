import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutImpact from "./components/AboutImpact";
import RecruitingPlatforms from "./components/RecruitingPlatforms";
import TechStack from "./components/TechStack";
import Clients from "./components/Clients";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GlobalSparkles from "./components/GlobalSparkles";

function App() {
  return (
    <div className="app">
      <GlobalSparkles />

      <Navbar />

      <main>
        <Hero />
        <AboutImpact />
        <RecruitingPlatforms />
        <TechStack />
        <Clients />
        <Certifications />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;