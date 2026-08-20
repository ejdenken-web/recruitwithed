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
          <span className="section-tag">
            RECRUITING PLATFORMS
          </span>

          
        </div>

        <div className="recruiting-platforms-grid">
          {platforms.map((platform) => (
            <div
              className="recruiting-platform-card"
              key={platform}
            >
              

              <h3>{platform}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RecruitingPlatforms;