import { useState } from "react";

const PLATFORMS = [
  "LinkedIn Recruiter (RPS)",
  "Dice",
  "CareerBuilder",
  "Monster",
  "Indeed",
  "TechFetch",
];

function About() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="about" style={{ background: "#08101F", padding: "120px 8%" }}>
      <style>{`
        #about * { box-sizing: border-box; }

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

        .about-heading {
          color: #38BDF8;
          font-size: 54px;
          font-weight: 800;
          margin-bottom: 35px;
        }

        .about-body {
          color: #CBD5E1;
          font-size: 19px;
          line-height: 1.9;
          margin-bottom: 28px;
        }

        .platform-section {
          margin-top: 150px;
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
          margin-bottom: 28px;
          box-shadow: 0 0 25px rgba(56,189,248,.08);
        }

        .platform-title {
          margin: 0 0 20px;
          color: #38BDF8;
          font-size: clamp(2.7rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.15;
        }

        .platform-description {
          max-width: 760px;
          margin: 0 auto;
          color: #CBD5E1;
          font-size: 18px;
          line-height: 1.8;
        }

        .orbit-wrapper {
          position: relative;
          width: 760px;
          height: 760px;
          max-width: 94vw;
          aspect-ratio: 1;
          margin: 75px auto 0;
        }

        .orbit-ring {
          position: absolute;
          width: 89.5%;
          height: 89.5%;
          top: 5.25%;
          left: 5.25%;
          border: 2px solid rgba(56,189,248,.35);
          border-radius: 50%;
          box-shadow:
            0 0 80px rgba(56,189,248,.10),
            inset 0 0 80px rgba(56,189,248,.04);
        }

        .orbit-rotating {
          position: absolute;
          inset: 0;
          animation: recruitingOrbit 42s linear infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }

        .platform-item {
          position: absolute;
          width: 150px;
          min-height: 50px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #0B1528;
          border: 1px solid rgba(56,189,248,.70);
          border-radius: 999px;
          color: #38BDF8;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.25;
          box-shadow: 0 0 25px rgba(56,189,248,.12);
          z-index: 5;
          transition: background .2s, border-color .2s, box-shadow .2s;
          /* counter-rotates so the label stays upright while the ring spins */
          animation: counterOrbit 42s linear infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }

        .platform-item:hover,
        .platform-item:focus-visible {
          background: rgba(56,189,248,.18);
          border-color: #38BDF8;
          box-shadow: 0 0 40px rgba(56,189,248,.30);
          outline: none;
        }

        .orbit-center {
          position: absolute;
          width: 180px;
          height: 180px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 25px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56,189,248,.25), #0B1022 70%);
          border: 2px solid rgba(56,189,248,.65);
          color: #38BDF8;
          font-size: 21px;
          font-weight: 800;
          line-height: 1.3;
          box-shadow:
            0 0 60px rgba(56,189,248,.20),
            inset 0 0 40px rgba(56,189,248,.08);
          z-index: 10;
        }

        .orbit-note {
          margin-top: 25px;
          color: #64748B;
          font-size: 12px;
          text-align: center;
        }

        @keyframes recruitingOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes counterOrbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-rotating, .platform-item {
            animation: none !important;
          }
        }

        @media (max-width: 900px) {
          #about { padding: 40px 24px 80px !important; }
          .platform-section { margin-top: 110px; }
          .about-heading, .platform-title { font-size: 2.5rem; }
          .about-body, .platform-description { font-size: 16px; }
          .orbit-wrapper { width: 500px; height: 500px; margin-top: 55px; }
          .platform-item { width: 108px; min-height: 40px; padding: 7px; font-size: 9px; }
          .orbit-center { width: 140px; height: 140px; font-size: 15px; }
        }

        @media (max-width: 480px) {
          #about { padding: 30px 18px 70px !important; }
          .platform-section { margin-top: 90px; }
          .platform-tag { font-size: 11px; padding: 8px 15px; }
          .about-heading, .platform-title { font-size: 2.15rem; }
          .about-body, .platform-description { font-size: 15px; line-height: 1.7; }
          .orbit-wrapper { width: 320px; height: 320px; margin-top: 45px; }
          .platform-item { width: 76px; min-height: 32px; padding: 5px 4px; font-size: 7px; }
          .orbit-center { width: 100px; height: 100px; font-size: 10px; padding: 12px; }
          .orbit-note { font-size: 10px; }
        }
      `}</style>

      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <span className="about-tag">ABOUT</span>

        <h2 className="about-heading">
          Building Careers.
          <br />
          Building Teams.
        </h2>

        <p className="about-body">
          With over a decade of recruiting experience, I believe successful
          hiring begins with trust, meaningful conversations, and understanding
          the people behind every career decision.
        </p>

        <p className="about-body">
          Throughout my career, I have partnered with organizations across
          Technology, Financial Services, Healthcare, Consulting,
          Manufacturing, Aviation, Retail, and Engineering, helping build
          high-performing teams through strategic talent acquisition.
        </p>

        <p className="about-body" style={{ marginBottom: 0 }}>
          RecruitWithEd reflects my commitment to continuous learning,
          responsible AI adoption, and modern recruiting practices that create
          better hiring experiences for both organizations and professionals.
        </p>

        <div className="platform-section">
          <span className="platform-tag">WHERE I RECRUIT</span>
          <h3 className="platform-title">Sourcing Every Channel</h3>
          <p className="platform-description">
            I meet candidates where they already are, running searches across
            every major recruiting platform to build a complete picture of
            the talent market.
          </p>

          <div
            className="orbit-wrapper"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="orbit-ring" />
            <div className="orbit-rotating">
              {PLATFORMS.map((platform, i) => {
                const angle = (360 / PLATFORMS.length) * i - 90;
                const radian = (angle * Math.PI) / 180;
                const radiusPercent = 38;
                const left = 50 + radiusPercent * Math.cos(radian);
                const top = 50 + radiusPercent * Math.sin(radian);

                return (
                  <div
                    key={platform}
                    className="platform-item"
                    tabIndex={0}
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {platform}
                  </div>
                );
              })}
            </div>
            <div className="orbit-center">RecruitWithEd</div>
          </div>

          <p className="orbit-note">Hover to pause the orbit</p>
        </div>
      </div>
    </section>
  );
}

export default About;
