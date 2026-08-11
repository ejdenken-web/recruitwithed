import "./TechStack.css";

type Technology = {
  name: string;
  category: string;
  ring: "outer" | "middle" | "inner";
  position: string;
};

function TechStack() {
  const technologies: Technology[] = [
    // OUTER RING
    {
      name: "TypeScript / TSX",
      category: "LANGUAGES",
      ring: "outer",
      position: "p1",
    },
    {
      name: "HTML5",
      category: "LANGUAGES",
      ring: "outer",
      position: "p2",
    },
    {
      name: "CSS3",
      category: "LANGUAGES",
      ring: "outer",
      position: "p3",
    },
    {
      name: "React",
      category: "FRAMEWORKS",
      ring: "outer",
      position: "p4",
    },
    {
      name: "Vite",
      category: "BUILD TOOLS",
      ring: "outer",
      position: "p5",
    },
    {
      name: "Node.js",
      category: "RUNTIME",
      ring: "outer",
      position: "p6",
    },

    // MIDDLE RING
    {
      name: "npm",
      category: "DEVELOPMENT",
      ring: "middle",
      position: "p1",
    },
    {
      name: "Responsive Design",
      category: "UI / UX",
      ring: "middle",
      position: "p2",
    },
    {
      name: "CSS Animations",
      category: "UI / UX",
      ring: "middle",
      position: "p3",
    },
    {
      name: "Glassmorphism",
      category: "UI / UX",
      ring: "middle",
      position: "p4",
    },
    {
      name: "Git",
      category: "VERSION CONTROL",
      ring: "middle",
      position: "p5",
    },
    {
      name: "GitHub",
      category: "VERSION CONTROL",
      ring: "middle",
      position: "p6",
    },

    // INNER RING
    {
      name: "Netlify",
      category: "DEPLOYMENT",
      ring: "inner",
      position: "p1",
    },
    {
      name: "Vercel",
      category: "DEPLOYMENT",
      ring: "inner",
      position: "p2",
    },
    {
      name: "ChatGPT",
      category: "AI-ASSISTED DEVELOPMENT",
      ring: "inner",
      position: "p3",
    },
    {
      name: "Claude AI",
      category: "AI-ASSISTED DEVELOPMENT",
      ring: "inner",
      position: "p4",
    },
  ];

  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-container">

        <span className="section-tag">
          MY TECHNOLOGY ECOSYSTEM
        </span>

        <h2 className="tech-stack-title">
          Technology in <span>Motion</span>
        </h2>

        <p className="tech-stack-description">
          The technologies, tools, frameworks, runtime, deployment platforms,
          and AI-assisted development behind RecruitWithEd.
        </p>

        <div className="tech-category-bar">
          <span className="active">✦ All</span>
          <span>⌘ Languages</span>
          <span>◇ Frameworks</span>
          <span>◌ Development</span>
          <span>◈ UI / UX</span>
          <span>✧ Deployment</span>
          <span>✦ AI & Tools</span>
        </div>

        <div className="tech-universe">

          <div className="tech-orbit tech-orbit-outer" />
          <div className="tech-orbit tech-orbit-middle" />
          <div className="tech-orbit tech-orbit-inner" />

          <div className="tech-orbit-dashed" />

          <div className="tech-core-glow" />

          <div className="tech-core">
            <div className="tech-core-ring">
              <span>ED</span>
            </div>

            <strong>RecruitWithEd</strong>

            <small>
              TECHNOLOGY • CREATIVITY • AI
            </small>
          </div>

          <div className="tech-ring tech-ring-outer">
            {technologies
              .filter((technology) => technology.ring === "outer")
              .map((technology) => (
                <div
                  key={technology.name}
                  className={`tech-card ${technology.position}`}
                >
                  <div className="tech-card-icon">
                    {technology.name === "TypeScript / TSX" && "TS"}
                    {technology.name === "HTML5" && "</>"}
                    {technology.name === "CSS3" && "CSS"}
                    {technology.name === "React" && "⚛"}
                    {technology.name === "Vite" && "V"}
                    {technology.name === "Node.js" && "JS"}
                  </div>

                  <strong>{technology.name}</strong>
                  <small>{technology.category}</small>
                </div>
              ))}
          </div>

          <div className="tech-ring tech-ring-middle">
            {technologies
              .filter((technology) => technology.ring === "middle")
              .map((technology) => (
                <div
                  key={technology.name}
                  className={`tech-card ${technology.position}`}
                >
                  <div className="tech-card-icon">
                    {technology.name === "npm" && "npm"}
                    {technology.name === "Responsive Design" && "⌗"}
                    {technology.name === "CSS Animations" && "✦"}
                    {technology.name === "Glassmorphism" && "◈"}
                    {technology.name === "Git" && "⌘"}
                    {technology.name === "GitHub" && "◉"}
                  </div>

                  <strong>{technology.name}</strong>
                  <small>{technology.category}</small>
                </div>
              ))}
          </div>

          <div className="tech-ring tech-ring-inner">
            {technologies
              .filter((technology) => technology.ring === "inner")
              .map((technology) => (
                <div
                  key={technology.name}
                  className={`tech-card ${technology.position}`}
                >
                  <div className="tech-card-icon">
                    {technology.name === "Netlify" && "N"}
                    {technology.name === "Vercel" && "▲"}
                    {technology.name === "ChatGPT" && "AI"}
                    {technology.name === "Claude AI" && "AI"}
                  </div>

                  <strong>{technology.name}</strong>
                  <small>{technology.category}</small>
                </div>
              ))}
          </div>

        </div>

        <div className="tech-stack-footer">

          <div className="tech-footer-intro">
            <div className="tech-footer-icon">
              🚀
            </div>

            <div>
              <strong>
                Built to Recruit. Powered by Technology.
              </strong>

              <p>
                Leveraging modern technologies to connect great talent
                with great opportunities.
              </p>
            </div>
          </div>

          <div className="tech-footer-stat">
            <strong>16+</strong>
            <span>Technologies</span>
          </div>

          <div className="tech-footer-stat">
            <strong>∞</strong>
            <span>Possibilities</span>
          </div>

          <div className="tech-footer-stat">
            <strong>✦</strong>
            <span>Impact Driven</span>
          </div>

        </div>

        <div className="tech-stack-note">
          <span>✦</span>
          <p>
            Every technology has a purpose. Every project tells a story.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TechStack;