import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-container">

        <span className="section-tag">
          LET'S WORK TOGETHER
        </span>

        <h2>
          Helping Organizations Hire Exceptional Talent
        </h2>

        <p>
          Whether you're building a technology team, hiring engineering
          professionals, or looking for strategic recruiting support,
          let's start the conversation.
        </p>

        <div className="cta-buttons">

          <a
            href="mailto:recruitwithed@gmail.com"
            className="primary-btn"
          >
            Contact Me
          </a>

          <a
            href="#clients"
            className="secondary-btn"
          >
            View Clients
          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;