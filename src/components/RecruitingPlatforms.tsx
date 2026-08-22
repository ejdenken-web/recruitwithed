import "./RecruitingPlatforms.css";

function RecruitingPlatforms() {
  const platforms = [
    {
      name: "LinkedIn Recruiter",
      url: "https://www.linkedin.com/talent/recruiter",
    },
    {
      name: "Indeed",
      url: "https://www.indeed.com",
    },
    {
      name: "Dice",
      url: "https://www.dice.com",
    },
    {
      name: "Monster",
      url: "https://www.monster.com",
    },
    {
      name: "CareerBuilder",
      url: "https://www.careerbuilder.com",
    },
  ];

  return (
    <section
      id="recruiting-platforms"
      className="recruiting-platforms-section"
    >
      <div className="recruiting-platforms-container">

        <div className="recruiting-platforms-marquee">
          <div className="recruiting-platforms-track">
            {[...platforms, ...platforms].map(
              (platform, index) => (
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recruiting-platform-card"
                  key={`${platform.name}-${index}`}
                >
                  <h3>{platform.name}</h3>
                </a>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default RecruitingPlatforms;