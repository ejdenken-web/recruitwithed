import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutImpact from "./components/AboutImpact";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Organizations from "./components/Organizations";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FadeIn from "./components/FadeIn";
import BackgroundEffects from "./components/BackgroundEffects";
import CursorGlow from "./components/CursorGlow";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <>
      <PageLoader />
      <BackgroundEffects />
      <CursorGlow />

      <Navbar />

      <FadeIn><Hero /></FadeIn>
      <FadeIn><Services /></FadeIn>
      <FadeIn><AboutImpact /></FadeIn>
      <FadeIn><Timeline /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Experience /></FadeIn>
      <FadeIn><WhyWorkWithMe /></FadeIn>
      <FadeIn><Organizations /></FadeIn>
      <FadeIn><CaseStudies /></FadeIn>
      <FadeIn><Testimonials /></FadeIn>
      <FadeIn><Certifications /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><CTA /></FadeIn>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;