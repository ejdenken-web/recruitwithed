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
          margin-top: 140px;
          padding-top: 10px;
        }

        .platform-tag {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(56,189,248,.12);
          border: 1px solid rgba(56,189,248,.25);
          color: #38BDF8;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 28px;
        }

        .platform-heading {
          margin: 0 0 18px;
          color: #38BDF8;
          font-size: clamp(2.6rem, 5vw, 3.4rem);
          font-weight: 800;
          line-height: 1.2;
        }

        .platform-description {
          max-width: 720px;
          margin: 0 auto;
          color: #CBD5E1;
          font-size: 18px;
          line-height: 1.8;
        }

        .recruiting-orbit {
          position: relative;
          width: 650px;
          height: 650px;
          max-width: 94vw;
          margin: 65px auto 0;
        }

        .orbit-circle {
          position: absolute;
          inset: 45px;
          border: 2px solid rgba(56,189,248,.30);
          border-radius: 50%;

          box-shadow:
            0 0 65px rgba(56,189,248,.08),
            inset 0 0 65px rgba(56,189,248,.04);
        }

        .orbit-animation {
          position: absolute;
          inset: 0;
          animation: platformOrbit 32s linear infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }

        .orbit-platform {
          position: absolute;
          top: 50%;
          left: 50%;

          width: 145px;
          min-height: 48px;
          padding: 10px 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          border-radius: 999px;

          background: #0B1528;
          border: 1px solid rgba(56,189,248,.60);

          color: #38BDF8;

          font-size: 12px;
          font-weight: 700;
          line-height: 1.25;

          box-shadow:
            0 0 20px rgba(56,189,248,.10);

          z-index: 2;
        }

        .orbit-platform:hover {
          background: rgba(56,189,248,.16);
          border-color: #38BDF8;
          box-shadow:
            0 0 35px rgba(56,189,248,.28);
        }

        /*
          The orbit radius is 250px.
          The circle radius is 280px.
          The platform width is 145px.
          This keeps the entire pill safely inside the circle.
        */

        .orbit-platform:nth-child(1) {
          transform:
            translate(-50%, -50%)
            rotate(0deg)
            translateY(-250px)
            rotate(0deg);
        }

        .orbit-platform:nth-child(2) {
          transform:
            translate(-50%, -50%)
            rotate(60deg)
            translateY(-250px)
            rotate(-60deg);
        }

        .orbit-platform:nth-child(3) {
          transform:
            translate(-50%, -50%)
            rotate(120deg)
            translateY(-250px)
            rotate(-120deg);
        }

        .orbit-platform:nth-child(4) {
          transform:
            translate(-50%, -50%)
            rotate(180deg)
            translateY(-250px)
            rotate(-180deg);
        }

        .orbit-platform:nth-child(5) {
          transform:
            translate(-50%, -50%)
            rotate(240deg)
            translateY(-250px)
            rotate(-240deg);
        }

        .orbit-platform:nth-child(6) {
          transform:
            translate(-50%, -50%)
            rotate(300deg)
            translateY(-250px)
            rotate(-300deg);
        }

        .orbit-center {
          position: absolute;
          top: 50%;
          left: 50%;

          width: 180px;
          height: 180px;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;
          padding: 25px;

          background:
            radial-gradient(
              circle,
              rgba(56,189,248,.24),
              #0B1022 70%
            );

          border: 2px solid rgba(56,189,248,.65);

          color: #38BDF8;

          font-size: 21px;
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: .5px;

          box-shadow:
            0 0 60px rgba(56,189,248,.20),
            inset 0 0 40px rgba(56,189,248,.08);

          z-index: 3;
        }

        .orbit-status {
          margin-top: 25px;
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
            padding: 40px 24px 80px !important;
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
            margin-top: 110px;
          }

          .platform-heading {
            font-size: 2.5rem;
          }

          .platform-description {
            font-size: 16px;
          }

          .recruiting-orbit {
            width: 500px;
            height: 500px;
            max-width: 96vw;
            margin-top: 55px;
          }

          .orbit-circle {
            inset: 35px;
          }

          .orbit-platform {
            width: 110px;
            min-height: 42px;
            padding: 8px 9px;
            font-size: 9px;
          }

          .orbit-platform:nth-child(1) {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateY(-195px)
              rotate(0deg);
          }

          .orbit-platform:nth-child(2) {
            transform:
              translate(-50%, -50%)
              rotate(60deg)
              translateY(-195px)
              rotate(-60deg);
          }

          .orbit-platform:nth-child(3) {
            transform:
              translate(-50%, -50%)
              rotate(120deg)
              translateY(-195px)
              rotate(-120deg);
          }

          .orbit-platform:nth-child(4) {
            transform:
              translate(-50%, -50%)
              rotate(180deg)
              translateY(-195px)
              rotate(-180deg);
          }

          .orbit-platform:nth-child(5) {
            transform:
              translate(-50%, -50%)
              rotate(240deg)
              translateY(-195px)
              rotate(-240deg);
          }

          .orbit-platform:nth-child(6) {
            transform:
              translate(-50%, -50%)
              rotate(300deg)
              translateY(-195px)
              rotate(-300deg);
          }

          .orbit-center {
            width: 140px;
            height: 140px;
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          #about {
            padding: 30px 18px 70px !important;
          }

          #about h2 {
            font-size: 35px !important;
          }

          #about p {
            font-size: 16px !important;
          }

          .recruiting-platforms-area {
            margin-top: 90px;
          }

          .platform-heading {
            font-size: 2.2rem;
          }

          .platform-description {
            font-size: 15px;
          }

          .recruiting-orbit {
            width: 350px;
            height: 350px;
            max-width: 98vw;
            margin-top: 45px;
          }

          .orbit-circle {
            inset: 28px;
          }

          .orbit-platform {
            width: 82px;
            min-height: 34px;
            padding: 6px 5px;
            font-size: 7px;
          }

          .orbit-platform:nth-child(1) {
            transform:
              translate(-50%, -50%)
              rotate(0deg)
              translateY(-138px)
              rotate(0deg);
          }

          .orbit-platform:nth-child(2) {
            transform:
              translate(-50%, -50%)
              rotate(60deg)
              translateY(-138px)
              rotate(-60deg);
          }

          .orbit-platform:nth-child(3) {
            transform:
              translate(-50%, -50%)
              rotate(120deg)
              translateY(-138px)
              rotate(-120deg);
          }

          .orbit-platform:nth-child(4) {
            transform:
              translate(-50%, -50%)
              rotate(180deg)
              translateY(-138px)
              rotate(-180deg);
          }

          .orbit-platform:nth-child(5) {
            transform:
              translate(-50%, -50%)
              rotate(240deg)
              translateY(-138px)
              rotate(-240deg);
          }

          .orbit-platform:nth-child(6) {
            transform:
              translate(-50%, -50%)
              rotate(300deg)
              translateY(-138px)
              rotate(-300deg);
          }

          .orbit-center {
            width: 100px;
            height: 100px;
            font-size: 10px;
            padding: 12px;
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

          <span className="platform-tag">
            RECRUITING PLATFORMS
          </span>

          <h3 className="platform-heading">
            Recruiting Platforms
          </h3>

          <p className="platform-description">
            Talent sourcing and recruiting platforms used to identify,
            connect with, and engage technology professionals.
          </p>

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
              : "Hover over the platforms to pause"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;