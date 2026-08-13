import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import RecruitingPlatforms from "./components/RecruitingPlatforms";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <CursorGlow />

      <Navbar />

      <main>
        <Hero />

        <About />


        <Clients />

        <RecruitingPlatforms />

        <Certifications />

        <Projects />

        <TechStack />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;