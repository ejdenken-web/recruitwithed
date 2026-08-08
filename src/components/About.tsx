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

  const [paused, setPaused] = useState(false);

  return (
    <section
      id="about"
      style={{
        background: "#08101F",
        padding: "120px 8%",
      }}
    >
      <style>{`
        .recruiting-platforms-area {
          margin-top: 120px;
          padding-top: 20px;
        }

        .recruiting-orbit {
          position: relative;
          width: 430px;
          height: 430px;
          max-width: 90vw;
          margin: 45px auto 0;
        }

        .orbit-circle {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(56,189,248,.20);
          border-radius: 50%;
          box-shadow:
            0 0 45px rgba(56,189,248,.05),
            inset 0 0 45px rgba(56,189,248,.03);
        }

        .orbit-animation {
          position: absolute;
          inset: 0;
          animation: platformOrbit 28s linear infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }

        .orbit-platform {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150px;
          min-height: 46px;
          padding: 11px 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          border-radius: 999px;

          background: #0B1528;
          border: 1px solid rgba(56,189,248,.50);

          color: #38BDF8;

          font-size: 12px;
          font-weight: 700;
          line-height: 1.3;

          box-shadow: 0 0 18px rgba(56,189,248,.08);
        }

        .orbit-platform:hover {
          background: rgba(56,189,248,.14);
          border-color: #38BDF8;
          box-shadow: 0 0 30px rgba(56,189,248,.25);
        }

        .orbit-platform:nth-child(1) {
          transform:
            translate(-50%, -50%)
            rotate(0deg)
            translateY(-175px)
            rotate(0deg);
        }

        .orbit-platform:nth-child(2) {
          transform:
            translate(-50%, -50%)
            rotate(60deg)
            translateY(-175px)
            rotate(-60deg);
        }

        .orbit-platform:nth-child(3) {
          transform:
            translate(-50%, -50%)
            rotate(120deg)
            translateY(-175px)
            rotate(-120deg);
        }

        .orbit-platform:nth-child(4) {
          transform:
            translate(-50%, -50%)
            rotate(180deg)
            translateY(-175px)
            rotate(-180deg);
        }

        .orbit-platform:nth-child(5) {
          transform:
            translate(-50%, -50%)
            rotate(240deg)
            translateY(-175px)
            rotate(-240deg);
        }

        .orbit-platform:nth-child(6) {
          transform:
            translate(-50%, -50%)
            rotate(300deg)
            translateY(-175px)
            rotate(-300deg);
        }

        .orbit-center {
          position: absolute;
          top: 50%;
          left: 50%;

          width: 150px;
          height: 150px;

          transform: translate(-50%, -50%);

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
              #0B1022 70%
            );

          border: 2px solid rgba(56,189,248,.55);

          color: #38BDF8;

          font-size: 16px;
          font-weight: 800;
          line-height: 1.35;
          letter-spacing: 1px;

          box-shadow:
            0 0 50px rgba(56,189,248,.16),
            inset 0 0 30px rgba(56,189,248,.08);

          z-index: 3;
        }

        .orbit-status {
          margin-top: 20px;
          color: #64748B;
          font-size: 12px;
          text-align: center;
        }

        @keyframes platformOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 900px) {
          #about {
            padding: 35px 24px 75px !important;
          }

          #about h2 {
            font-size: 42px !important;
            line-height: 1.15 !important;
          }

          #about p {
            font-size: 17px !important;
            line-height: 1.75 !important;
          }

          .recruiting-platforms-area {
            margin-top: 100px;
          }

          .recruiting-orbit {
            width: 350px;
            height: 350px;
          }

          .orbit-platform {
            width: 115px;
            min-height: 40px;
            padding: 9px 10px;
            font-size: 10px;
          }

          .orbit-platform:nth-child(1) {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateY(-142px)
              rotate(0deg);
          }

          .orbit-platform:nth-child(2) {
            transform:
              translate(-50%, -50%)
              rotate(60deg)
              translateY(-142px)
              rotate(-60deg);
          }

          .orbit-platform:nth-child(3) {
            transform:
              translate(-50%, -50%)
              rotate(120deg)
              translateY(-142px)
              rotate(-120deg);
          }

          .orbit-platform:nth-child(4) {
            transform:
              translate(-50%, -50%)
              rotate(180deg)
              translateY(-142px)
              rotate(-180deg);
          }

          .orbit-platform:nth-child(5) {
            transform:
              translate(-50%, -50%)
              rotate(240deg)
              translateY(-142px)
              rotate(-240deg);
          }

          .orbit-platform:nth-child(6) {
            transform:
              translate(-50%, -50%)
              rotate(300deg)
              translateY(-142px)
              rotate(-300deg);
          }

          .orbit-center {
            width: 110px;
            height: 110px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          #about {
            padding: 25px 20px 65px !important;
          }

          #about h2 {
            font-size: 36px !important;
          }

          #about p {
            font-size: 16px !important;
          }

          .recruiting-platforms-area {
            margin-top: 90px;
          }

          .recruiting-orbit {
            width: 290px;
            height: 290px;
          }

          .orbit-platform {
            width: 88px;
            min-height: 36px;
            padding: 7px 6px;
            font-size: 8px;
          }

          .orbit-platform:nth-child(1) {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateY(-116px)
              rotate(0deg);
          }

          .orbit-platform:nth-child(2) {
            transform:
              translate(-50%, -50%)
              rotate(60deg)
              translateY(-116px)
              rotate(-60deg);
          }

          .orbit-platform:nth-child(3) {
            transform:
              translate(-50%, -50%)
              rotate(120deg)
              translateY(-116px)
              rotate(-120deg);
          }

          .orbit-platform:nth-child(4) {
            transform:
              translate(-50%, -50%)
              rotate(180deg)
              translateY(-116px)
              rotate(-180deg);
          }

          .orbit-platform:nth-child(5) {
            transform:
              translate(-50%, -50%)
              rotate(240deg)
              translateY(-116px)
              rotate(-240deg);
          }

          .orbit-platform:nth-child(6) {
            transform:
              translate(-50%, -50%)
              rotate(300deg)
              translateY(-116px)
              rotate(-300deg);
          }

          .orbit-center {
            width: 85px;
            height: 85px;
            font-size: 9px;
            padding: 10px;
          }
        }
      `}</style>

      <div
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
            marginBottom: "0",
          }}
        >
          RecruitWithEd reflects my commitment to continuous learning,
          responsible AI adoption, and modern recruiting practices that create
          better hiring experiences for both organizations and professionals.
        </p>

        <div className="recruiting-platforms-area">
          <div
            className="recruiting-orbit"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="orbit-circle" />

            <div className="orbit-animation">
              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="orbit-platform"
                >
                  {platform}
                </div>
              ))}
            </div>

            <div className="orbit-center">
              Recruiting
              <br />
              Platforms
            </div>
          </div>

          <div className="orbit-status">
            {paused
              ? "Paused"
              : "Recruiting Technology & Talent Sourcing"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;