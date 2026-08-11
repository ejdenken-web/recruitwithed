import "./RecruitingPlatforms.css";

function RecruitingPlatforms() {
  const platforms = [
    "Dice",
    "Monster",
    "LinkedIn Recruiter",
    "Indeed",
    "TechFetch",
    "CareerBuilder",
  ];

  return (
    <section
      id="recruiting-platforms"
      className="recruiting-platforms-section"
    >
      <div className="recruiting-platforms-container">

        <span className="section-tag">
          RECRUITING PLATFORMS
        </span>

        <h2 className="recruiting-platforms-title">
          Recruiting Platforms
        </h2>

        <p className="recruiting-platforms-intro">
          Trusted recruiting platforms used to source, connect with,
          and identify exceptional technology professionals.
        </p>

        <div className="recruiting-platforms-grid">
          {platforms.map((platform, index) => (
            <div
              className="recruiting-platform-card"
              key={platform}
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <div className="platform-glow" />

              <span className="platform-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="platform-name">
                {platform}
              </span>

              <span className="platform-indicator" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RecruitingPlatforms;