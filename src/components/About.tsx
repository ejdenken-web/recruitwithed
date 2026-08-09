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
          padding: 35px;
          border-radius: 28px;
          background:
            radial-gradient(
              circle at top center,
              rgba(56,189,248,.08),
              transparent 45%
            ),
            #0B1528;
          border: 1px solid rgba(56,189,248,.18);
          box-shadow:
            0 25px 70px rgba(0,0,0,.25),
            inset 0 0 60px rgba(56,189,248,.025);
        }

        .platform-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .platform-node {
          position: relative;
          min-height: 82px;
          padding: 18px 20px;
          border-radius: 16px;
          background: #0F1C31;
          border: 1px solid rgba(56,189,248,.18);
          color: #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
          cursor: pointer;
          transition:
            transform .25s ease,
            background .25s ease,
            border-color .25s ease,
            box-shadow .25s ease,
            color .25s ease;
        }

        .platform-node::after {
          content: "";
          position: absolute;
          top: 10px;
          right: 12px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(56,189,248,.45);
          box-shadow: 0 0 10px rgba(56,189,248,.35);
        }

        .platform-node:hover,
        .platform-node.active {
          transform: translateY(-5px);
          color: #38BDF8;
          background: rgba(56,189,248,.09);
          border-color: rgba(56,189,248,.65);
          box-shadow:
            0 14px 35px rgba(56,189,248,.14);
        }

        .platform-node.active::after {
          background: #38BDF8;
          box-shadow: 0 0 14px rgba(56,189,248,.85);
        }

        .platform-status {
          margin-top: 24px;
          color: #64748B;
          font-size: 12px;
        }

        .platform-status strong {
          color: #38BDF8;
        }

        @media (max-width: 900px) {
          .platform-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .platform-stage {
            padding: 25px;
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
            padding: 18px;
          }

          .platform-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .platform-node {
            min-height: 62px;
            font-size: 12px;
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

            <div className="platform-grid">

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

          <div className="platform-status">
            Currently exploring:{" "}
            <strong>
              {platforms[activePlatform]}
            </strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;