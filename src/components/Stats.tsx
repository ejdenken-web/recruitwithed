import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "10+",
      label: "Years of Recruiting Experience",
    },
    {
      number: "6–40",
      label: "Recruiters Led & Mentored",
    },
    {
      number: "Fortune 500",
      label: "Client Experience",
    },
    {
      number: "AI + Boolean",
      label: "Modern Recruiting Expertise",
    },
  ];

  return (
    <section className="stats">

      <div className="container">

        <div className="stats-grid">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="stat-card"
            >

              <h2>{stat.number}</h2>

              <p>{stat.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;