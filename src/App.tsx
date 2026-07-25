import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutImpact from "./components/AboutImpact";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Organizations from "./components/Organizations";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./Layout.css";

function App() {
  return (
    <div className="website">

      <Navbar />

      <main>

        <Hero />

        <AboutImpact />

        <WhyWorkWithMe />

        <Organizations />

        <Certifications />

        <Projects />

      </main>

      <Footer />

    </div>
  );
}

export default App;