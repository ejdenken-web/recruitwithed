import { useEffect, useState } from "react";
import "./TechStack.css";

type Technology = {
  name: string;
  category: string;
  lane: number;
  duration: number;
  delay: number;
};

function TechStack() {
  const technologies: Technology[] = [
    { name: "TypeScript", category: "Languages", lane: 0, duration: 14, delay: 0 },
    { name: "TSX", category: "Languages", lane: 1, duration: 17, delay: 2 },
    { name: "HTML5", category: "Languages", lane: 2, duration: 15, delay: 4 },
    { name: "CSS3", category: "Languages", lane: 3, duration: 18, delay: 1 },

    { name: "React", category: "Frameworks", lane: 4, duration: 16, delay: 5 },
    { name: "React Hooks", category: "Frameworks", lane: 5, duration: 19, delay: 3 },

    { name: "Vite", category: "Development", lane: 6, duration: 15, delay: 6 },
    { name: "Node.js", category: "Runtime", lane: 7, duration: 18, delay: 2 },
    { name: "npm", category: "Development", lane: 8, duration: 16, delay: 7 },

    { name: "Responsive Design", category: "UI/UX", lane: 9, duration: 20, delay: 4 },
    { name: "CSS Animations", category: "UI/UX", lane: 10, duration: 17, delay: 8 },
    { name: "Glassmorphism", category: "UI/UX", lane: 11, duration: 19, delay: 5 },

    { name: "Git", category: "Version Control", lane: 12, duration: 15, delay: 9 },
    { name: "GitHub", category: "Version Control", lane: 13, duration: 18, delay: 6 },
    { name: "Netlify", category: "Deployment", lane: 14, duration: 17, delay: 10 },
    { name: "Vercel", category: "Deployment", lane: 15, duration: 20, delay: 7 },

    { name: "ChatGPT", category: "AI", lane: 16, duration: 16, delay: 11 },
    { name: "Claude AI", category: "AI", lane: 17, duration: 19, delay: 8 },
  ];

  const [activeTechnology, setActiveTechnology] = useState<string | null>(
    null
  );

  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 22 }, (_, index) => index));
  }, []);

  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-container">

        <span className="section-tag">TECHNOLOGY IN FLIGHT</span>

        <h2 className="tech-stack-title">
          Technology That Moves.
        </h2>

        <p className="tech-stack-description">
          A dynamic view of the technologies, development tools, frameworks,
          deployment platforms, and AI tools behind my work.
        </p>

        <div className="flight-deck">

          <div className="flight-grid" />

          {particles.map((particle) => (
            <span
              key={particle}
              className="flight-particle"
              style={{
                animationDelay: `${particle * -0.7}s`,
                top: `${8 + ((particle * 17) % 84)}%`,
              }}
            />
          ))}

          {technologies.map((technology) => {
            const isActive = activeTechnology === technology.name;

            return (
              <div
                key={technology.name}
                className={`technology-flight ${
                  isActive ? "technology-flight-active" : ""
                }`}
                style={{
                  animationDuration: `${technology.duration}s`,
                  animationDelay: `${-technology.delay}s`,
                  "--lane": technology.lane,
                } as React.CSSProperties}
              >
                <button
                  type="button"
                  className="technology-card"
                  onMouseEnter={() =>
                    setActiveTechnology(technology.name)
                  }
                  onMouseLeave={() =>
                    setActiveTechnology(null)
                  }
                  onFocus={() =>
                    setActiveTechnology(technology.name)
                  }
                  onBlur={() =>
                    setActiveTechnology(null)
                  }
                  aria-label={`${technology.name} - ${technology.category}`}
                >
                  <span className="technology-card-name">
                    {technology.name}
                  </span>

                  <span className="technology-card-category">
                    {technology.category}
                  </span>
                </button>
              </div>
            );
          })}

          <div className="flight-label flight-label-top">
            <span className="flight-label-line" />
            <span>LANGUAGES • FRAMEWORKS • TOOLS</span>
          </div>

          <div className="flight-label flight-label-bottom">
            <span>AI • UI/UX • DEPLOYMENT</span>
            <span className="flight-label-line" />
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