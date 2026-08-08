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
        .platform-section {
          margin-top: 150px;
          padding-top: 20px;
          text-align: center;
        }

        .platform-tag {
          display: inline-block;
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(56,189,248,.12);
          border: 1px solid rgba(56,189,248,.30);
          color: #38BDF8;
          font-size: 13px;
          font-weight: 700;
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
          max-width: 720px;
          margin: 0 auto;
          color: #CBD5E1;
          font-size: 18px;
          line-height: 1.8;
        }

        .orbit-wrapper {
          width: 620px;
          height: 620px;
          max-width: 94vw;
          margin: 70px auto 0;
          position: relative;
        }

        .orbit-ring {
          position: absolute;
          width: 500px;
          height: 500px;
          top: 60px;
          left: 60px;
          border: 2px solid rgba(56,189,248,.30);
          border-radius: 50%;
          box-shadow:
            0 0 70px rgba(56,189,248,.08),
            inset 0 0 70px rgba(56,189,248,.04);
        }

        .orbit-rotating {
          position: absolute;
          inset: 0;
          animation: recruitingOrbit 40s linear infinite;
          animation-play-state: ${paused ? "paused" : "running"};
        }

        /*
          IMPORTANT:
          The portals are positioned INSIDE the 500px circle.
          The outer circle runs from 60px to 560px.
          Each portal is deliberately inset from the edge.
        */

        .platform-item {
          position: absolute;
          width: 140px;
          min-height: 46px;
          padding: 9px 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          background: #0B1528;
          border: 1px solid rgba(56,189,248,.65);
          border-radius: 999px;

          color: #38BDF8;

          font-size: 12px;
          font-weight: 700;
          line-height: 1.25;

          box-shadow:
            0 0 20px rgba(56,189,248,.10);

          z-index: 5;
        }

        .platform-item:hover {
          background: rgba(56,189,248,.18);
          border-color: #38BDF8;
          box-shadow:
            0 0 35px rgba(56,189,248,.30);
        }

        /* TOP */
        .platform-item:nth-child(1) {
          top: 70px;
          left: 180px;
        }

        /* UPPER RIGHT */
        .platform-item:nth-child(2) {
          top: 155px;
          right: 75px;
        }

        /* LOWER RIGHT */
        .platform-item:nth-child(3) {
          bottom: 155px;
          right: 75px;
        }

        /* BOTTOM */
        .platform-item:nth-child(4) {
          bottom: 70px;
          left: 180px;
        }

        /* LOWER LEFT */
        .platform-item:nth-child(5) {
          bottom: 155px;
          left: 75px;
        }

        /* UPPER LEFT */
        .platform-item:nth-child(6) {
          top: 155px;
          left: 75px;
        }

        .orbit-center {
          position: absolute;

          width: 180px;
          height: 180px;

          top: 220px;
          left: 220px;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          padding: 25px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(56,189,248,.25),
              #0B1022 70%
            );

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
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          #about {
            padding: 40px 24px 80px !important;
          }

          .platform-section {
            margin-top: 110px;
          }

          .platform-title {
            font-size: 2.5rem;
          }

          .platform-description {
            font-size: 16px;
          }

          .orbit-wrapper {
            width: 500px;
            height: 500px;
            max-width: 96vw;
            margin-top: 55px;
          }

          .orbit-ring {
            width: 400px;
            height: 400px;
            top: 50px;
            left: 50px;
          }

          .platform-item {
            width: 108px;
            min-height: 40px;
            padding: 7px;
            font-size: 9px;
          }

          .platform-item:nth-child(1) {
            top: 60px;
            left: 146px;
          }

          .platform-item:nth-child(2) {
            top: 125px;
            right: 65px;
          }

          .platform-item:nth-child(3) {
            bottom: 125px;
            right: 65px;
          }

          .platform-item:nth-child(4) {
            bottom: 60px;
            left: 146px;
          }

          .platform-item:nth-child(5) {
            bottom: 125px;
            left: 65px;
          }

          .platform-item:nth-child(6) {
            top: 125px;
            left: 65px;
          }

          .orbit-center {
            width: 140px;
            height: 140px;
            top: 180px;
            left: 180px;
            font-size: 15px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 480px) {
          #about {
            padding: 30px 18px 70px !important;
          }

          .platform-section {
            margin-top: 90px;
          }

          .platform-tag {
            font-size: 11px;
            padding: 8px 15px;
          }

          .platform-title {
            font-size: 2.15rem;
          }

          .platform-description {
            font-size: 15px;
            line-height: 1.7;
          }

          .orbit-wrapper {
            width: 350px;
            height: 350px;
            max-width: 98vw;
            margin-top: 45px;
          }

          .orbit-ring {
            width: 290px;
            height: 290px;
            top: 30px;
            left: 30px;
          }

          .platform-item {
            width: 76px;
            min-height: 32px;
            padding: 5px 4px;
            font-size: 7px;
          }

          .platform-item:nth-child(1) {
            top: 37px;
            left: 87px;
          }

          .platform-item:nth-child(2) {
            top: 82px;
            right: 32px;
          }

          .platform-item:nth-child(3) {
            bottom: 82px;
            right: 32px;
          }

          .platform-item:nth-child(4) {
            bottom: 37px;
            left: 87px;
          }

          .platform-item:nth-child(5) {
            bottom: 82px;
            left: 32px;
          }

          .platform-item:nth-child(6) {
            top: 82px;
            left: 32px;
          }

          .orbit-center {
            width: 100px;
            height: 100px;
            top: 125px;
            left: 125px;
            font-size: 10px;
            padding: 12px;
          }

          .orbit-note {
            font-size: 10px;
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
        {/* ABOUT BUTTON */}

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

        {/* MAIN HEADING */}

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

        {/* ABOUT CONTENT */}

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

        {/* RECRUITING PLATFORMS */}

        <div className="platform-section">

          {/* BUTTON / TAG */}

          <span className="platform-tag">
            RECRUITING PLATFORMS
          </span>

          {/* HEADING */}

          
          {/* DESCRIPTION */}

          <p className="platform-description">
            Talent sourcing and platforms used to identify,
            connect with, and engage technology professionals.
          </p>

          {/* ORBIT */}

          <div
            className="orbit-wrapper"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="orbit-ring" />

            <div className="orbit-rotating">

              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="platform-item"
                >
                  {platform}
                </div>
              ))}

            </div>

            {/* CENTER */}

            <div className="orbit-center">
              Recruiting
              <br />
              Platforms
            </div>

          </div>

          {/* PAUSE MESSAGE */}

          <div className="orbit-note">
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