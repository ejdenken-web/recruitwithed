import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutImpact from "./components/AboutImpact";
import Clients from "./components/Clients";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import ChhotaBheemAnimation from "./pages/ChhotaBheemAnimation";

function App() {
  const currentPath = window.location.pathname;

  if (currentPath === "/chhota-bheem-animation") {
    return <ChhotaBheemAnimation />;
  }

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

      <Analytics />
    </>
  );
}

export default App;