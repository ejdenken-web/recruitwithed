import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutImpact from "./components/AboutImpact";
import Clients from "./components/Clients";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <AboutImpact />

        <Clients />

        <Certifications />

        <Projects />

        <TechStack />
      </main>

      <Footer />
    </>
  );
}

export default App;