import { useState } from "react";

function About() {
  const platforms = [
    "LinkedIn Recruiter (RPS)",
    "Dice",
    "CareerBuilder",
    "Monster",
    "Indeed",
    "TechFetch",
  ];

  const [activePlatform, setActivePlatform] = useState(0);

  return (
    <section
      id="about"
      style={{
        background: "#08101F",
        padding: "120px 8%",
      }}
    >
      <style>{`
        .about-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .about-tag {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(56,189,248,.12);
          border: 1px solid rgba(56,189,248,.25);
          color: #38BDF8;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .about-title {
          color: #38BDF8;
          font-size: clamp(3rem, 6vw, 54px);
          font-weight: 800;
          line-height: 1.15;
          margin: 0 0 35px;
        }

        .about-text {
          color: #CBD5E1;
          font-size: 19px;
          line-height: 1.9;
          margin: 0 0 28px;
        }

        .platform-section {
          margin-top: 130px;
          padding-top: 20px;
          text-align: center;
        }

        .platform-tag {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 999px;
          background: rgba(56,189,248,.12);
          border: 1px solid rgba(56,189,248,.30);
          color: #38BDF8;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 24px;
        }

        .platform-description {
          max-width: 760px;
          margin: 0 auto;
          color: #CBD5E1;
          font-size: 18px;
          line-height: 1.8;
        }

        .platform-stage {
          max-width: 1000px;
          margin: 55px auto 0;

          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;

          gap: 10px;

          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0;
        }

        .platform-center {
          display: none !important;
        }

        .platform-node {
          position: relative;

          flex: 1 1 0;
          min-width: 0;

          min-height: 54px;
          padding: 14px 12px;

          border-radius: 14px;

          background: #0B1528;
          border: 1px solid rgba(56,189,248,.22);

          color: #CBD5E1;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          font-size: 12px;
          font-weight: 700;
          line-height: 1.3;

          cursor: pointer;

          transition:
            transform .3s ease,
            color .3s ease,
            background .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .platform-node:hover {
          color: #38BDF8;
          background: rgba(56,189,248,.08);
          border-color: #38BDF8;
          box-shadow: 0 12px 30px rgba(56,189,248,.16);
          transform: translateY(-5px);
        }

        .platform-node.active {
          color: #08101F;
          background: #38BDF8;
          border-color: #38BDF8;
          box-shadow: 0 12px 30px rgba(56,189,248,.22);
          transform: translateY(-5px);
        }

        .platform-node::before {
          display: none !important;
        }

        .platform-status {
          display: none !important;
        }

        @media (max-width: 900px) {
          .platform-stage {
            flex-wrap: wrap;
            gap: 12px;
          }

          .platform-node {
            flex: 0 1 calc(33.333% - 12px);
          }
        }

        @media (max-width: 600px) {
          #about {
            padding: 75px 18px 85px !important;
          }

          .about-title {
            font-size: 2.5rem;
          }

          .about-text {
            font-size: 16px;
            line-height: 1.8;
          }

          .platform-section {
            margin-top: 90px;
          }

          .platform-description {
            font-size: 15px;
          }

          .platform-stage {
            margin-top: 40px;
            gap: 10px;
          }

          .platform-node {
            flex: 0 1 calc(50% - 10px);
            min-height: 52px;
            font-size: 11px;
          }
        }
      `}</style>

      <div className="about-content">
        <span className="about-tag">
          ABOUT
        </span>

        <h2 className="about-title">
          Building Careers.
          <br />
          Building Teams.
        </h2>

        <p className="about-text">
          With over a decade of recruiting experience, I believe successful
          hiring begins with trust, meaningful conversations, and understanding
          the people behind every career decision.
        </p>

        <p className="about-text">
          Throughout my career, I have partnered with organizations across
          Technology, Financial Services, Healthcare, Consulting,
          Manufacturing, Aviation, Retail, and Engineering, helping build
          high-performing teams through strategic talent acquisition.
        </p>

        <p
          className="about-text"
          style={{ marginBottom: 0 }}
        >
          RecruitWithEd reflects my commitment to continuous learning,
          responsible AI adoption, and modern recruiting practices that create
          better hiring experiences for both organizations and professionals.
        </p>

        <div
          className="platform-section"
          id="recruiting-platforms"
        >
          <span className="platform-tag">
            RECRUITING PLATFORMS
          </span>

          <p className="platform-description">
            Talent sourcing and platforms used to identify, connect with,
            and engage technology professionals.
          </p>

          <div className="platform-stage">
            {platforms.map((platform, index) => (
              <button
                key={platform}
                type="button"
                className={`platform-node ${
                  activePlatform === index ? "active" : ""
                }`}
                onClick={() => setActivePlatform(index)}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;