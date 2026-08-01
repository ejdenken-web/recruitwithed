import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Ed consistently delivers high-quality technology candidates while maintaining an exceptional candidate experience.",
      author: "Hiring Manager",
      company: "Global Financial Services",
    },
    {
      quote:
        "His Boolean search expertise and AI-assisted sourcing significantly improved our hiring pipeline.",
      author: "Talent Acquisition Leader",
      company: "Consulting Organization",
    },
    {
      quote:
        "Professional, transparent and highly responsive throughout the recruitment process.",
      author: "Engineering Director",
      company: "Technology Client",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">

        <span className="section-tag">
          TESTIMONIALS
        </span>

        <h2 className="section-title">
          What Hiring Leaders Value
        </h2>

        <div className="testimonial-grid">

          {testimonials.map((item) => (

            <div
              key={item.author + item.company}
              className="testimonial-card"
            >

              <p>"{item.quote}"</p>

              <h4>{item.author}</h4>

              <span>{item.company}</span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;