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
          Platforms I use to discover, connect with, and engage
          exceptional technology professionals.
        </p>

        <div className="recruiting-platforms-cloud">
          {platforms.map((platform, index) => (
            <div
              key={platform}
              className="platform-chip"
              style={{
                animationDelay: `${index * 0.45}s`,
              }}
            >
              <span className="platform-dot" />
              <span>{platform}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RecruitingPlatforms;