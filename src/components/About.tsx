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
            marginBottom: "8px",
          }}
        >
          Recruiting Platforms
        </h3>

        <p
          style={{
            color: "#64748B",
            fontSize: "13px",
            marginBottom: "30px",
          }}
        >
          Hover to pause
        </p>

        <div
          style={{
            position: "relative",
            width: "420px",
            height: "420px",
            maxWidth: "90vw",
            margin: "0 auto",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: "1px solid rgba(56,189,248,.18)",
              borderRadius: "50%",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "130px",
              height: "130px",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              background:
                "radial-gradient(circle, rgba(56,189,248,.18), #0F172A 70%)",
              border: "1px solid rgba(56,189,248,.35)",
              color: "#38BDF8",
              fontSize: "14px",
              fontWeight: 800,
              boxShadow: "0 0 45px rgba(56,189,248,.12)",
            }}
          >
            RecruitWithEd
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              animation: "recruitingOrbit 24s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {platforms.map((platform, index) => {
              const angle = index * 60;

              return (
                <div
                  key={platform}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "145px",
                    padding: "12px 14px",
                    borderRadius: "999px",
                    background: "#101827",
                    border: "1px solid rgba(56,189,248,.25)",
                    color: "#E2E8F0",
                    fontSize: "12px",
                    fontWeight: 700,
                    textAlign: "center",
                    transform: `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translateX(140px)
                      rotate(-${angle}deg)
                    `,
                  }}
                >
                  {platform}
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes recruitingOrbit {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 600px) {
            #about {
              padding: 35px 20px 65px !important;
            }

            #about h2 {
              font-size: 36px !important;
            }

            #about p {
              font-size: 16px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

export default About;