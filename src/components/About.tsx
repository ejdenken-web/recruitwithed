function About() {
  const platforms = [
    "LinkedIn Recruiter (RPS)",
    "Dice",
    "CareerBuilder",
    "Monster",
    "Indeed",
    "TechFetch",
  ];

  return (
    <section
      id="about"
      style={{
        background: "#08101F",
        padding: "120px 8%",
      }}
    >
      <style>
        {`
          @media (max-width: 900px) {
            #about {
              padding: 35px 24px 90px !important;
            }

            #about .about-content {
              max-width: 900px;
            }

            #about h2 {
              font-size: 42px !important;
              line-height: 1.15 !important;
              margin-bottom: 28px !important;
            }

            #about p {
              font-size: 17px !important;
              line-height: 1.75 !important;
            }
          }

          @media (max-width: 480px) {
            #about {
              padding: 25px 20px 75px !important;
            }

            #about h2 {
              font-size: 36px !important;
            }

            #about p {
              font-size: 16px !important;
            }
          }
        `}
      </style>

      <div
        className="about-content"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            background: "rgba(56,189,248,.12)",
            border: "1px solid rgba(56,189,248,.25)",
            color: "#38BDF8",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "30px",
          }}
        >
          ABOUT
        </span>

        <h2
          style={{
            color: "#38BDF8",
            fontSize: "54px",
            fontWeight: 800,
            marginBottom: "35px",
          }}
        >
          Building Careers.
          <br />
          Building Teams.
        </h2>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "19px",
            lineHeight: "1.9",
            marginBottom: "28px",
          }}
        >
          With over a decade of recruiting experience, I believe successful
          hiring begins with trust, meaningful conversations, and understanding
          the people behind every career decision.
        </p>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "19px",
            lineHeight: "1.9",
            marginBottom: "28px",
          }}
        >
          Throughout my career, I have partnered with organizations across
          Technology, Financial Services, Healthcare, Consulting,
          Manufacturing, Aviation, Retail, and Engineering, helping build
          high-performing teams through strategic talent acquisition.
        </p>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "19px",
            lineHeight: "1.9",
            marginBottom: "45px",
          }}
        >
          RecruitWithEd reflects my commitment to continuous learning,
          responsible AI adoption, and modern recruiting practices that create
          better hiring experiences for both organizations and professionals.
        </p>

        <h3
          style={{
            color: "#FFFFFF",
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          Recruiting Platforms
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          {platforms.map((platform) => (
            <span
              key={platform}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                background: "rgba(56,189,248,.10)",
                border: "1px solid rgba(56,189,248,.20)",
                color: "#E2E8F0",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;