import "./GlobalSparkles.css";

function GlobalSparkles() {
  return (
    <div className="global-sparkles" aria-hidden="true">
      {Array.from({ length: 55 }, (_, index) => (
        <span
          key={index}
          className={`sparkle sparkle-${(index % 6) + 1}`}
        />
      ))}
    </div>
  );
}

export default GlobalSparkles;