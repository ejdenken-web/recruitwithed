import "./RecruitingPlatforms.css";

function RecruitingPlatforms() {
  const platforms = [
    "LinkedIn Recruiter",
    "Indeed",
    "Dice",
    "ZipRecruiter",
    "Monster",
    "CareerBuilder",
    "Google Jobs",
    "ATS & Recruiting CRM Platforms",
  ];

  return (
    <section
      id="recruiting-platforms"
      className="recruiting-platforms-section"
    >
      <div className="recruiting-platforms-container">

        <div className="recruiting-platforms-header">
          <span className="section-tag">
            RECRUITING PLATFORMS
          </span>

          <h2>
            Recruiting Tools &
            <br />
            <span>Platforms.</span>
          </h2>
        </div>

        <div className="recruiting-platforms-grid">
          {platforms.map((platform) => (
            <div
              className="recruiting-platform-card"
              key={platform}
            >
              <span className="platform-indicator" />

              <h3>{platform}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RecruitingPlatforms;