import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-left">

          <span className="section-tag">
            ABOUT
          </span>

          <h2 className="section-title">
            Building Strong Teams Through Modern Recruiting.
          </h2>

          <p className="section-description">
            With over 10 years of recruiting experience, I believe successful
            hiring begins with trust, meaningful conversations, and understanding
            the people behind every career decision.
          </p>

          <p className="section-description">
            I have partnered with clients across Technology, Financial Services,
            Healthcare, Consulting, Retail, Manufacturing, Aviation, Consumer
            Goods, and Engineering, helping organizations build high-performing
            teams through strategic talent acquisition.
          </p>

          <p className="section-description">
            My recruiting approach combines AI-assisted sourcing, strategic talent
            mapping, advanced Boolean search, market intelligence and transparent
            communication to deliver consistent hiring results.
          </p>

        </div>

        <div className="about-right">

          <div className="about-card">

            <h3>Highlights</h3>

            <div className="about-item">

              <strong>10+ Years</strong>

              <span>Technology Recruiting</span>

            </div>

            <div className="about-item">

              <strong>Fortune 500</strong>

              <span>Client Experience</span>

            </div>

            <div className="about-item">

              <strong>AI + Boolean</strong>

              <span>Modern Recruiting</span>

            </div>

            <div className="about-item">

              <strong>6–40</strong>

              <span>Recruiters Led & Mentored</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;