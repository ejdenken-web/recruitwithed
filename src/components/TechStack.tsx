import { useState } from "react";
import "./TechStack.css";

function TechStack() {
  const categories = [
    {
      title: "Languages & Core Technologies",
      short: "CORE",
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
      short: "FRONTEND",
      skills: [
        "React",
        "Vite",
        "CSS",
        "Responsive Design",
      ],
    },
    {
      title: "AI-Assisted Development",
      short: "AI",
      skills: [
        "ChatGPT",
        "Claude AI",
      ],
    },
    {
      title: "Development & Deployment",
      short: "DEVOPS",
      skills: [
        "Git",
        "GitHub",
        "Netlify",
        "StackBlitz",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeCategory =
    activeIndex === null
      ? null
      : categories[activeIndex];

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
            Technology &{" "}
            <span>Tools.</span>
          </h2>

          <p>
            Click a technology area to explore the tools
            behind RecruitWithEd.
          </p>
        </div>

        <div className="tech-interactive-stage">

          <div className="tech-particle particle-one" />
          <div className="tech-particle particle-two" />
          <div className="tech-particle particle-three" />
          <div className="tech-particle particle-four" />
          <div className="tech-particle particle-five" />

          <div className="tech-center">
            <div className="tech-center-orbit" />

            <div className="tech-center-content">
              <span className="tech-center-label">
                {activeCategory
                  ? activeCategory.short
                  : "TECH STACK"}
              </span>

              <strong>
                {activeCategory
                  ? activeCategory.title
                  : "Explore"}
              </strong>

              <small>
                {activeCategory
                  ? "Technologies in use"
                  : "Select a category"}
              </small>
            </div>
          </div>

          {categories.map((category, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                type="button"
                key={category.title}
                className={`tech-category tech-category-${index + 1} ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  setActiveIndex(
                    isActive ? null : index
                  )
                }
                aria-pressed={isActive}
              >
                <span className="tech-category-dot" />

                <span className="tech-category-name">
                  {category.title}
                </span>

                <span className="tech-category-short">
                  {category.short}
                </span>
              </button>
            );
          })}

          {activeCategory && (
            <div className="tech-floating-skills">
              {activeCategory.skills.map(
                (skill, index) => (
                  <span
                    key={skill}
                    className="tech-floating-skill"
                    style={
                      {
                        "--skill-delay": `${
                          index * 90
                        }ms`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="skill-dot" />
                    {skill}
                  </span>
                )
              )}
            </div>
          )}

        </div>

        <div className="tech-interaction-hint">
          <span className="hint-dot" />
          {activeCategory
            ? `Viewing ${activeCategory.title}`
            : "Select any category"}
        </div>

      </div>
    </section>
  );
}

export default TechStack;