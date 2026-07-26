import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      title: "Technology Recruiting",
      text:
        "Supported organizations in identifying highly skilled software engineers, cloud professionals, data engineers, cybersecurity specialists, DevOps engineers, and technology leaders.",
    },
    {
      title: "Industry Experience",
      text:
        "Partnered with clients across Technology, Financial Services, Healthcare, Manufacturing, Retail, Aviation, Consumer Goods, and Consulting.",
    },
    {
      title: "Modern Recruiting",
      text:
        "Combining AI-assisted recruiting, strategic sourcing, Boolean search, market intelligence, and relationship-driven recruiting to improve hiring outcomes.",
    },
  ];

  return (
    <section className="testimonial-section">

      <div className="testimonial-header">

        <span className="section-tag">
          EXPERTISE
        </span>

        <h2>
          What I Bring
        </h2>

        <p>
          Combining recruiting experience, technology expertise,
          and AI-assisted workflows to deliver modern talent
          acquisition solutions.
        </p>

      </div>

      <div className="testimonial-grid">

        {testimonials.map((item) => (

          <div
            className="testimonial-card"
            key={item.title}
          >

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;