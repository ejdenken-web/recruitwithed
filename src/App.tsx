import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutImpact from "./components/AboutImpact";
import Clients from "./components/Clients";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

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
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;