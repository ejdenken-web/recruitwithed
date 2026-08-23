import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import RecruitingPlatforms from "./components/RecruitingPlatforms";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Clients />
        <RecruitingPlatforms />
        <Certifications />
        <Projects />
        <TechStack />
        <Footer />
      </main>
    </div>
  );
}

export default App;