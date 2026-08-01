import "./AboutImpact.css";

export default function AboutImpact() {
  return (
    <section className="about-impact" id="impact">
      <div className="about-impact__container">
        <h2>Impact at a Glance</h2>

        <div className="about-impact__grid">
          <div className="impact-card">
            <h3>10+</h3>
            <p>Years of Professional Experience</p>
          </div>

          <div className="impact-card">
            <h3>6 to 40</h3>
            <p>Recruiters Managed &amp; Mentored</p>
          </div>

          <div className="impact-card">
            <h3>1000+</h3>
            <p>Technology Professionals Engaged</p>
          </div>

          <div className="impact-card">
            <h3>Multiple</h3>
            <p>Industries Supported</p>
          </div>
        </div>
      </div>
    </section>
  );
}