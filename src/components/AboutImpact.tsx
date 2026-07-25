import "./AboutImpact.css";

function AboutImpact() {
  return (
    <section className="about-section" id="about">

      <div className="about-grid">

        <div className="about-photo">

          <div className="photo-box">
            <span>Professional Photo</span>
          </div>

        </div>

        <div className="about-content">

          <span className="section-tag">
            ABOUT ME
          </span>

          <h2>
            Building High-Performing Technology Teams
          </h2>

          <p>
            With over a decade of recruiting experience, I specialize in
            connecting exceptional technology professionals with organizations
            ranging from fast-growing startups to global enterprises.
          </p>

          <p>
            My expertise spans AI-assisted recruiting, strategic sourcing,
            advanced Boolean search, executive hiring, and relationship-driven
            talent acquisition across Technology, Financial Services,
            Healthcare, Manufacturing, Retail, Aviation, and Engineering.
          </p>

          <p>
            RecruitWithEd reflects my commitment to continuous learning,
            responsible AI adoption, and delivering an exceptional hiring
            experience for both clients and candidates.
          </p>

          <div className="about-cards">

            <div className="mini-card">
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>

            <div className="mini-card">
              <h3>25</h3>
              <span>AI Certifications</span>
            </div>

            <div className="mini-card">
              <h3>35+</h3>
              <span>Enterprise Clients</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutImpact;