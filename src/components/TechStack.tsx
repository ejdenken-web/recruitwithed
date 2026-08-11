import "./TechStack.css";

type TechCategory = {
  title: string;
  icon: string;
  items: string[];
};

function TechStack() {
  const categories: TechCategory[] = [
    {
      title: "Languages & Core Technologies",
      icon: "🛠️",
      items: ["TypeScript (or TSX)", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Libraries",
      icon: "📦",
      items: ["React (including React Hooks)"],
    },
    {
      title: "Development & Build Tools",
      icon: "⚙️",
      items: ["Vite", "Node.js", "npm"],
    },
    {
      title: "UI/UX & Frontend Styling",
      icon: "🎨",
      items: ["CSS Animations", "Glassmorphism UI", "Responsive Design"],
    },
    {
      title: "Version Control & Deployment",
      icon: "🔧",
      items: ["Git", "GitHub", "Netlify / Vercel"],
    },
    {
      title: "AI-Assisted Development",
      icon: "🤖",
      items: ["ChatGPT", "Claude AI"],
    },
  ];

  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-container">

        <span className="section-tag">TECHNOLOGY &amp; TOOLS</span>

        <h2 className="tech-stack-title">
          Technology Behind RecruitWithEd
        </h2>

        <p className="tech-stack-description">
          The technologies, frameworks, development tools, deployment
          platforms, and AI tools used to bring RecruitWithEd to life.
        </p>

        <div className="tech-category-grid">
          {categories.map((category) => (
            <article
              className="tech-category-card"
              key={category.title}
            >
              <div className="tech-category-header">
                <span className="tech-category-icon">
                  {category.icon}
                </span>

                <h3>{category.title}</h3>
              </div>

              <div className="tech-pill-group">
                {category.items.map((item) => (
                  <span className="tech-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;