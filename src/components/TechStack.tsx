import { useState } from "react";
import "./TechStack.css";

type TechGroup = {
  title: string;
  icon: string;
  accent: string;
  items: string[];
};

function TechStack() {
  const techGroups: TechGroup[] = [
    {
      title: "Languages & Core Technologies",
      icon: "🛠️",
      accent: "languages",
      items: ["TypeScript", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Libraries",
      icon: "📦",
      accent: "frameworks",
      items: ["React", "React Hooks"],
    },
    {
      title: "Development & Build Tools",
      icon: "⚙️",
      accent: "development",
      items: ["Vite", "Node.js", "npm"],
    },
    {
      title: "UI/UX & Frontend Styling",
      icon: "🎨",
      accent: "design",
      items: [
        "CSS Animations",
        "Glassmorphism UI",
        "Responsive Design",
      ],
    },
    {
      title: "Version Control & Deployment",
      icon: "🔧",
      accent: "deployment",
      items: ["Git", "GitHub", "Netlify", "Vercel"],
    },
    {
      title: "AI-Assisted Development",
      icon: "🤖",
      accent: "ai",
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

        <p className="tech-stack-description">
          A focused collection of technologies, frameworks,
          development tools, deployment platforms, and AI tools
          used to bring RecruitWithEd to life.
        </p>

        <div
          className={`tech-stack-showcase tech-theme-${currentGroup.accent}`}
        >

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

                <span className="tech-category-title">
                  {group.title}
                </span>

                {activeGroup === index && (
                  <span className="tech-active-indicator" />
                )}
              </button>
            ))}
          </div>

          <div className="tech-display">

            <div className="tech-orb tech-orb-one" />
            <div className="tech-orb tech-orb-two" />
            <div className="tech-light-sweep" />

            <div className="tech-display-header">
              <h3>{currentGroup.title}</h3>

              <div className="tech-header-line" />
            </div>

            <div className="tech-skill-field">
              {currentGroup.items.map((item, index) => (
                <button
                  key={`${currentGroup.title}-${item}`}
                  type="button"
                  className={`tech-skill-card ${
                    activeSkill === item ? "active" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
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

                  <span className="tech-skill-arrow">
                    →
                  </span>
                </button>
              ))}
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