import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CareerHighlights from "./components/CareerHighlights";
import Clients from "./components/Clients";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <CareerHighlights />

        <Clients />

        <Certifications />

        <Projects />
      </main>

      <Footer />
    </>
  );
}

export default App;