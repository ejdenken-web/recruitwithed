import "./RecruitingPlatforms.css";

function RecruitingPlatforms() {
  const platforms = [
    "LinkedIn Recruiter",
    "Indeed",
    "Dice",
    "Monster",
    "CareerBuilder",
  ];

  return (
    <section
      id="recruiting-platforms"
      className="recruiting-platforms-section"
    >
      <div className="recruiting-platforms-container">

        <div className="recruiting-platforms-header">
          <h2>
            Recruiting <span>Platforms.</span>
          </h2>
        </div>

        <div className="recruiting-platforms-track">
          {platforms.map((platform) => (
            <div
              className="recruiting-platform-card"
              key={platform}
            >
              <span>{platform}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RecruitingPlatforms;