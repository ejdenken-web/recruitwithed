import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "30+",
      title: "Enterprise Clients",
    },
    {
      number: "25",
      title: "Professional Certifications",
    },
    {
      number: "Global",
      title: "North America • Japan • India",
    },
  ];

  return (
    <section className="stats-section">

      <div className="stats-container">

        {stats.map((item) => (

          <div className="stat-card" key={item.title}>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;