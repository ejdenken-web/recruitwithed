import { useState } from "react";
import "./TechStack.css";

function TechStack() {
  const categories = [
    {
      title: "Languages & Core Technologies",
      icon: "</>",
      skills: [
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "JSX",
      ],
    },
    {
      title: "Frontend & Development",
      icon: "⚡",
      skills: [
        "React",
        "Vite",
        "CSS",
        "Responsive Design",
      ],
    },
    {
      title: "AI-Assisted Development",
      icon: "✦",
      skills: [
        "ChatGPT",
        "Claude AI",
      ],
    },
    {
      title: "Development & Deployment",
      icon: "⌘",
      skills: [
        "Git",
        "GitHub",
        "Netlify",
        "StackBlitz",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="tech-stack"
      className="tech-stack-section"
    >
      <div className="tech-stack-container">

        <div className="tech-stack-header">
          <span className="section-tag">
            TECHNOLOGY & TOOLS
          </span>

          <h2>
            Technology & <br />
            <span>Tools.</span>
          </h2>

          <p>
            Click any category to reveal the technologies
            and tools used to build, maintain, and deploy
            modern digital experiences.
          </p>
        </div>

        <div className="tech-stack-orbit">

          <div className="tech-orbit-ring ring-one" />
          <div className="tech-orbit-ring ring-two" />

          {categories.map((category, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                className={`tech-stack-card ${
                  isActive ? "active" : ""
                }`}
                key={category.title}
                data-index={index}
              >
                <button
                  type="button"
                  className="tech-stack-trigger"
                  onClick={() => toggleCategory(index)}
                  aria-expanded={isActive}
                >
                  <span className="tech-card-icon">
                    {category.icon}
                  </span>

                  <span className="tech-card-title">
                    {category.title}
                  </span>

                  <span
                    className={`tech-card-arrow ${
                      isActive ? "open" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`tech-stack-reveal ${
                    isActive ? "visible" : ""
                  }`}
                >
                  <div className="tech-stack-list">
                    {category.skills.map(
                      (skill, skillIndex) => (
                        <span
                          className="tech-stack-item"
                          key={skill}
                          style={
                            {
                              "--item-delay": `${
                                skillIndex * 70
                              }ms`,
                            } as React.CSSProperties
                          }
                        >
                          <span className="tech-item-dot" />
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="tech-stack-status">
          <span className="status-pulse" />

          {activeIndex === null
            ? "SELECT A CATEGORY"
            : `${categories[activeIndex].title.toUpperCase()} SELECTED`}
        </div>

      </div>
    </section>
  );
}

export default TechStack;