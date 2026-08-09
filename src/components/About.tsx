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
          position: relative;
          max-width: 900px;
          min-height: 500px;
          margin: 65px auto 0;
          padding: 45px;
          border-radius: 32px;
          background:
            radial-gradient(
              circle at center,
              rgba(56,189,248,.10),
              transparent 38%
            ),
            linear-gradient(
              145deg,
              rgba(17,24,39,.96),
              rgba(8,16,31,.98)
            );
          border: 1px solid rgba(56,189,248,.18);
          box-shadow:
            0 30px 80px rgba(0,0,0,.28),
            inset 0 0 80px rgba(56,189,248,.025);
          overflow: hidden;
        }

        .platform-stage::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              transparent 49.8%,
              rgba(56,189,248,.06) 50%,
              transparent 50.2%
            ),
            linear-gradient(
              0deg,
              transparent 49.8%,
              rgba(56,189,248,.06) 50%,
              transparent 50.2%
            );
          pointer-events: none;
        }

        .platform-center {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          background:
            radial-gradient(
              circle,
              rgba(56,189,248,.22),
              rgba(11,21,40,.98) 65%
            );
          border: 1px solid rgba(56,189,248,.55);
          box-shadow:
            0 0 45px rgba(56,189,248,.16),
            inset 0 0 30px rgba(56,189,248,.08);
          z-index: 3;
        }

        .platform-center span {
          color: #38BDF8;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
          line-height: 1.5;
        }

        .platform-node {
          position: absolute;
          width: 185px;
          min-height: 70px;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(11,21,40,.95);
          border: 1px solid rgba(56,189,248,.20);
          color: #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.35;
          cursor: pointer;
          transition:
            transform .3s ease,
            border-color .3s ease,
            background .3s ease,
            box-shadow .3s ease,
            color .3s ease;
          z-index: 4;
        }

        .platform-node:hover,
        .platform-node.active {
          color: #38BDF8;
          background: rgba(56,189,248,.10);
          border-color: rgba(56,189,248,.65);
          box-shadow:
            0 12px 35px rgba(56,189,248,.16);
          transform: translateY(-5px);
        }

        .platform-node::before {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #38BDF8;
          box-shadow: 0 0 12px rgba(56,189,248,.75);
        }

        .platform-node:nth-child(1) {
          top: 55px;
          left: 50%;
          transform: translateX(-50%);
        }

        .platform-node:nth-child(2) {
          top: 145px;
          right: 55px;
        }

        .platform-node:nth-child(3) {
          bottom: 65px;
          right: 55px;
        }

        .platform-node:nth-child(4) {
          bottom: 55px;
          left: 50%;
          transform: translateX(-50%);
        }

        .platform-node:nth-child(5) {
          bottom: 65px;
          left: 55px;
        }

        .platform-node:nth-child(6) {
          top: 145px;
          left: 55px;
        }

        .platform-node:nth-child(1)::before,
        .platform-node:nth-child(4)::before {
          left: 50%;
          transform: translateX(-50%);
        }

        .platform-node:nth-child(2)::before,
        .platform-node:nth-child(3)::before {
          left: -4px;
          top: 50%;
          transform: translateY(-50%);
        }

        .platform-node:nth-child(5)::before,
        .platform-node:nth-child(6)::before {
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
        }

        .platform-status {
          margin-top: 25px;
          color: #64748B;
          font-size: 12px;
        }

        .platform-status strong {
          color: #38BDF8;
        }

        @media (max-width: 900px) {
          .platform-stage {
            min-height: 600px;
            padding: 25px;
          }

          .platform-center {
            width: 125px;
            height: 125px;
          }

          .platform-node {
            width: 155px;
            font-size: 11px;
          }

          .platform-node:nth-child(1) {
            top: 35px;
          }

          .platform-node:nth-child(2) {
            right: 20px;
            top: 150px;
          }

          .platform-node:nth-child(3) {
            right: 20px;
            bottom: 90px;
          }

          .platform-node:nth-child(4) {
            bottom: 30px;
          }

          .platform-node:nth-child(5) {
            left: 20px;
            bottom: 90px;
          }

          .platform-node:nth-child(6) {
            left: 20px;
            top: 150px;
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
            min-height: 650px;
            margin-top: 45px;
            padding: 15px;
          }

          .platform-center {
            width: 105px;
            height: 105px;
            font-size: 11px;
          }

          .platform-node {
            width: 125px;
            min-height: 58px;
            padding: 10px;
            font-size: 9px;
          }

          .platform-node:nth-child(1) {
            top: 30px;
          }

          .platform-node:nth-child(2) {
            right: 8px;
            top: 155px;
          }

          .platform-node:nth-child(3) {
            right: 8px;
            bottom: 125px;
          }

          .platform-node:nth-child(4) {
            bottom: 35px;
          }

          .platform-node:nth-child(5) {
            left: 8px;
            bottom: 125px;
          }

          .platform-node:nth-child(6) {
            left: 8px;
            top: 155px;
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

            <div className="platform-center">
              <span>
                TALENT
                <br />
                SOURCING
              </span>
            </div>

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