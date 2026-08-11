import { useState } from "react";
import "./TechStack.css";

type TechGroup = {
  title: string;
  icon: string;
  items: string[];
};

function TechStack() {
  const techGroups: TechGroup[] = [
    {
      title: "Languages & Core Technologies",
      icon: "🛠️",
      items: ["TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Libraries",
      icon: "📦",
      items: ["React", "React Hooks"],
    },
    {
      title: "Development & Build Tools",
      icon: "⚙️",
      items: ["Vite", "Node.js", "npm"],
    },
    {
      title: "UI/UX & Frontend Styling",
      icon: "🎨",
      items: [
        "CSS Animations",
        "Glassmorphism UI",
        "Responsive Design",
      ],
    },
    {
      title: "Version Control & Deployment",
      icon: "🔧",
      items: ["Git", "GitHub", "Netlify", "Vercel"],
    },
    {
      title: "AI-Assisted Development",
      icon: "🤖",
      items: ["ChatGPT", "Claude AI"],
    },
  ];

  const [activeGroup, setActiveGroup] = useState(0);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const currentGroup = techGroups[activeGroup];

  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-container">

        <span className="section-tag">
          TECHNOLOGY & TOOLS
        </span>

        <h2 className="tech-stack-title">
          The Technology Behind RecruitWithEd
        </h2>

        <p className="tech-stack-description">
          A focused collection of technologies, frameworks,
          development tools, deployment platforms, and AI tools
          used to bring RecruitWithEd to life.
        </p>

        <div className="tech-stack-showcase">

          <div className="tech-category-nav">
            {techGroups.map((group, index) => (
              <button
                key={group.title}
                type="button"
                className={`tech-category-button ${
                  activeGroup === index ? "active" : ""
                }`}
                onClick={() => {
                  setActiveGroup(index);
                  setActiveSkill(null);
                }}
              >
                <span className="tech-category-icon">
                  {group.icon}
                </span>

                <span>{group.title}</span>
              </button>
            ))}
          </div>

          <div className="tech-display">

            <div className="tech-display-glow" />

            <div className="tech-display-header">
              <div>
                <span className="tech-display-label">
                  TECHNOLOGY GROUP
                </span>

                <h3>{currentGroup.title}</h3>
              </div>
            </div>

            <div className="tech-skill-field">
              {currentGroup.items.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`tech-skill-card ${
                    activeSkill === item ? "active" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.12}s`,
                  }}
                  onMouseEnter={() => setActiveSkill(item)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onFocus={() => setActiveSkill(item)}
                  onBlur={() => setActiveSkill(null)}
                >
                  <span className="tech-skill-dot" />

                  <span className="tech-skill-name">
                    {item}
                  </span>

                  <span className="tech-skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>

            <div className="tech-display-footer">
              <span className="tech-footer-line" />

              <span>
                RecruitWithEd
              </span>
            </div>

          </div>
        </div>

        <div className="tech-interaction-note">
          <span>✦</span>
          <p>
            Select a technology group to explore the stack.
          </p>
        </div>

      </div>
    </section>
  );
}

export default TechStack;