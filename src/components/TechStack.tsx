import { useEffect, useState } from "react";
import "./TechStack.css";

type Technology = {
  name: string;
  category: string;
  angle: number;
  radius: number;
  duration: number;
};

function TechStack() {
  const technologies: Technology[] = [
    {
      name: "TypeScript",
      category: "Languages",
      angle: 0,
      radius: 290,
      duration: 22,
    },
    {
      name: "TSX",
      category: "Languages",
      angle: 45,
      radius: 250,
      duration: 19,
    },
    {
      name: "HTML5",
      category: "Languages",
      angle: 90,
      radius: 300,
      duration: 24,
    },
    {
      name: "CSS3",
      category: "Languages",
      angle: 135,
      radius: 255,
      duration: 20,
    },
    {
      name: "React",
      category: "Frameworks",
      angle: 180,
      radius: 290,
      duration: 23,
    },
    {
      name: "React Hooks",
      category: "Frameworks",
      angle: 225,
      radius: 245,
      duration: 18,
    },
    {
      name: "Vite",
      category: "Development",
      angle: 270,
      radius: 300,
      duration: 25,
    },
    {
      name: "Node.js",
      category: "Development",
      angle: 315,
      radius: 250,
      duration: 21,
    },
    {
      name: "npm",
      category: "Development",
      angle: 20,
      radius: 185,
      duration: 17,
    },
    {
      name: "Git",
      category: "Deployment",
      angle: 70,
      radius: 190,
      duration: 20,
    },
    {
      name: "GitHub",
      category: "Deployment",
      angle: 140,
      radius: 180,
      duration: 22,
    },
    {
      name: "Netlify",
      category: "Deployment",
      angle: 210,
      radius: 190,
      duration: 19,
    },
    {
      name: "Vercel",
      category: "Deployment",
      angle: 280,
      radius: 185,
      duration: 21,
    },
    {
      name: "Responsive Design",
      category: "UI/UX",
      angle: 340,
      radius: 190,
      duration: 23,
    },
    {
      name: "CSS Animations",
      category: "UI/UX",
      angle: 110,
      radius: 145,
      duration: 16,
    },
    {
      name: "Interactive UI",
      category: "UI/UX",
      angle: 250,
      radius: 150,
      duration: 18,
    },
    {
      name: "Glassmorphism",
      category: "UI/UX",
      angle: 30,
      radius: 140,
      duration: 17,
    },
    {
      name: "ChatGPT",
      category: "AI",
      angle: 155,
      radius: 145,
      duration: 15,
    },
    {
      name: "Claude AI",
      category: "AI",
      angle: 325,
      radius: 150,
      duration: 16,
    },
  ];

  const [activeTechnology, setActiveTechnology] =
    useState<string | null>(null);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let currentRotation = 0;

    const animate = () => {
      currentRotation += 0.025;
      setRotation(currentRotation);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">

        <span className="section-tag">
          PORTFOLIO TECH STACK
        </span>

        <h2 className="tech-stack-title">
          Technology in Motion
        </h2>

        <p className="tech-stack-description">
          A visual representation of the technologies, tools,
          frameworks, and AI-assisted development behind RecruitWithEd.
        </p>

        <div className="tech-universe">

          <div className="tech-orbit tech-orbit-outer" />
          <div className="tech-orbit tech-orbit-middle" />
          <div className="tech-orbit tech-orbit-inner" />

          <div className="tech-glow" />

          <div className="tech-core">
            <span className="tech-core-small">
              BUILT WITH
            </span>

            <strong>
              RecruitWithEd
            </strong>

            <span className="tech-core-subtitle">
              Technology • Creativity • AI
            </span>
          </div>

          {technologies.map((technology, index) => {
            const adjustedAngle =
              technology.angle + rotation * (index % 2 === 0 ? 1 : -1);

            const radians =
              (adjustedAngle * Math.PI) / 180;

            const x =
              Math.cos(radians) * technology.radius;

            const y =
              Math.sin(radians) * technology.radius;

            const isActive =
              activeTechnology === technology.name;

            return (
              <button
                type="button"
                key={technology.name}
                className={`floating-tech ${
                  isActive ? "active" : ""
                }`}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  animationDuration: `${technology.duration}s`,
                  animationDelay: `${-(technology.duration / 2)}s`,
                }}
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
                <span className="floating-tech-name">
                  {technology.name}
                </span>

                <span className="floating-tech-category">
                  {technology.category}
                </span>
              </button>
            );
          })}

        </div>

        <div className="tech-stack-note">
          <span>
            ✦
          </span>

          <p>
            Every technology has a purpose. Every project tells a story.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TechStack;