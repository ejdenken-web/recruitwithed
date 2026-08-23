import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-color hero-color-one" />
      <div className="hero-color hero-color-two" />
      <div className="hero-color hero-color-three" />
      <div className="hero-color hero-color-four" />

      <div className="hero-content">
        <h1>Ed Johnson</h1>

        <h2>Senior Information Technology Consultant</h2>

        <div className="hero-divider" />

        <p className="hero-tagline">
          Building Careers. Building Teams.
        </p>
      </div>
    </section>
  );
}

export default Hero;