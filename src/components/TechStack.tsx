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
      name: "TypeScript / TSX",
      category: "Languages",
      angle: 0,
      radius: 290,
      duration: 22,
    },
    {
      name: "HTML5",
      category: "Languages",
      angle: 45,
      radius: 250,
      duration: 19,
    },
    {
      name: "CSS3",
      category: "Languages",
      angle: 90,
      radius: 300,
      duration: 24,
    },
    {
      name: "React",
      category: "Frameworks",
      angle: 135,
      radius: 255,
      duration: 20,
    },
    {
      name: "React Hooks",
      category: "Frameworks",
      angle: 180,
      radius: 290,
      duration: 23,
    },
    {
      name: "Vite",
      category: "Build Tools",
      angle: 225,
      radius: 245,
      duration: 18,
    },
    {
      name: "Node.js",
      category: "Runtime",
      angle: 270,
      radius: 300,
      duration: 25,
    },
    {
      name: "npm",
      category: "Package Management",
      angle: 315,
      radius: 250,
      duration: 21,
    },
    {
      name: "CSS Animations",
      category: "UI/UX",
      angle: 20,
      radius: 185,
      duration: 17,
    },
    {
      name: "Glassmorphism UI",
      category: "UI/UX",
      angle: 70,
      radius: 190,
      duration: 20,
    },
    {
      name: "Responsive Design",
      category: "UI/UX",
      angle: 140,
      radius: 180,
      duration: 22,
    },
    {
      name: "Git",
      category: "Version Control",
      angle: 210,
      radius: 190,
      duration: 19,
    },
    {
      name: "GitHub",
      category: "Version Control",
      angle: 280,
      radius: 185,
      duration: 21,
    },
    {
      name: "Netlify",
      category: "Deployment",
      angle: 340,
      radius: 190,
      duration: 23,
    },
    {
      name: "Vercel",
      category: "Deployment",
      angle: 110,
      radius: 145,
      duration: 16,
    },
    {
      name: "ChatGPT",
      category: "AI-Assisted Development",
      angle: 250,
      radius: 150,
      duration: 18,
    },
    {
      name: "Claude AI",
      category: "AI-Assisted Development",
      angle: 30,
      radius: 140,
      duration: 17,
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
    <section
      id="tech-stack"
      className="tech-stack-section"
    >
      <div className="tech-stack-container">

        <span className="section-tag">
          PORTFOLIO TECH STACK
        </span>

        <h2 className="tech-stack-title">
          Technology in Motion
        </h2>

        <p className="tech-stack-description">
          A visual representation of the technologies, frameworks,
          development tools, runtime, deployment platforms, and
          AI-assisted development behind RecruitWithEd.
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
              technology.angle +
              rotation * (index % 2 === 0 ? 1 : -1);

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