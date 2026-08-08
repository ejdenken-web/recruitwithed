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
        .about-content {
          max-width: 900px;
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

        .platform-description {
          max-width: 760px;
          margin: 0 auto;
          color: #CBD5E1;
          font-size: 18px;
          line-height: 1.8;
        }

        /*
          LARGE ORBIT
        */

        .orbit-wrapper {
          position: relative;
          width: 760px;
          height: 760px;
          max-width: 94vw;
          margin: 75px auto 0;
        }

        .orbit-ring {
          position: absolute;
          width: 680px;
          height: 680px;
          top: 40px;
          left: 40px;
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

        /*
          PORTALS ARE POSITIONED WELL INSIDE
          THE LARGE CIRCLE.
        */

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

          box-shadow:
            0 0 25px rgba(56,189,248,.12);

          z-index: 5;

          transition:
            background .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .platform-item:hover {
          background: rgba(56,189,248,.18);
          border-color: #38BDF8;
          box-shadow:
            0 0 40px rgba(56,189,248,.30);
        }

        /*
          SIX EVEN POSITIONS
          AROUND THE EMPTY CENTER
        */

        .platform-item:nth-child(1) {
          top: 80px;
          left: 305px;
        }

        .platform-item:nth-child(2) {
          top: 205px;
          right: 95px;
        }

        .platform-item:nth-child(3) {
          bottom: 205px;
          right: 95px;
        }

        .platform-item:nth-child(4) {
          bottom: 80px;
          left: 305px;
        }

        .platform-item:nth-child(5) {
          bottom: 205px;
          left: 95px;
        }

        .platform-item:nth-child(6) {
          top: 205px;
          left: 95px;
        }

        @keyframes recruitingOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .orbit-note {
          margin-top: 25px;
          color: #64748B;
          font-size: 12px;
        }

        /*
          TABLET
        */

        @media (max-width: 900px) {

          .about-content {
            max-width: 100%;
          }

          .about-text {
            font-size: 17px;
          }

          .platform-section {
            margin-top: 110px;
          }

          .platform-description {
            font-size: 16px;
          }

          .orbit-wrapper {
            width: 560px;
            height: 560px;
            max-width: 96vw;
          }

          .orbit-ring {
            width: 500px;
            height: 500px;
            top: 30px;
            left: 30px;
          }

          .platform-item {
            width: 110px;
            min-height: 42px;
            padding: 7px;
            font-size: 9px;
          }

          .platform-item:nth-child(1) {
            top: 55px;
            left: 225px;
          }

          .platform-item:nth-child(2) {
            top: 145px;
            right: 70px;
          }

          .platform-item:nth-child(3) {
            bottom: 145px;
            right: 70px;
          }

          .platform-item:nth-child(4) {
            bottom: 55px;
            left: 225px;
          }

          .platform-item:nth-child(5) {
            bottom: 145px;
            left: 70px;
          }

          .platform-item:nth-child(6) {
            top: 145px;
            left: 70px;
          }
        }

        /*
          MOBILE
        */

        @media (max-width: 480px) {

          #about {
            padding: 70px 18px 80px !important;
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

          .platform-tag {
            font-size: 11px;
            padding: 8px 15px;
          }

          .platform-description {
            font-size: 15px;
            line-height: 1.7;
          }

          .orbit-wrapper {
            width: 360px;
            height: 360px;
            max-width: 98vw;
            margin-top: 50px;
          }

          .orbit-ring {
            width: 320px;
            height: 320px;
            top: 20px;
            left: 20px;
          }

          .platform-item {
            width: 78px;
            min-height: 34px;
            padding: 5px;
            font-size: 7px;
          }

          .platform-item:nth-child(1) {
            top: 35px;
            left: 101px;
          }

          .platform-item:nth-child(2) {
            top: 85px;
            right: 25px;
          }

          .platform-item:nth-child(3) {
            bottom: 85px;
            right: 25px;
          }

          .platform-item:nth-child(4) {
            bottom: 35px;
            left: 101px;
          }

          .platform-item:nth-child(5) {
            bottom: 85px;
            left: 25px;
          }

          .platform-item:nth-child(6) {
            top: 85px;
            left: 25px;
          }

          .orbit-note {
            font-size: 10px;
          }
        }
      `}</style>

      <div className="about-content">

        {/* ABOUT */}

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

        {/* RECRUITING PLATFORMS */}

        <div className="platform-section">

          <span className="platform-tag">
            RECRUITING PLATFORMS
          </span>

          <p className="platform-description">
            Talent sourcing and platforms used to identify, connect with,
            and engage technology professionals.
          </p>

          {/* LARGE CIRCLE */}

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

          </div>

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