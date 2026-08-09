import { useState } from "react";
import "./Certifications.css";

function Certifications() {
  const certificationGroups = [
    {
      provider: "Anthropic",
      short: "ANTHROPIC",
      icon: "AI",
      certifications: [
        "Claude 101",
        "Claude Platform 101",
        "Introduction to Agent Skills",
        "Introduction to Claude Cowork",
        "Introduction to Subagents",
        "AI Capabilities and Limitations",
        "AI Fluency Framework & Foundations",
      ],
    },
    {
      provider: "LangChain",
      short: "LANGCHAIN",
      icon: "LC",
      certifications: [
        "Introduction to LangGraph – Python",
        "Introduction to LangSmith Deployment",
        "Autonomous Agent Improvement with LangSmith Engine",
      ],
    },
    {
      provider: "Microsoft",
      short: "MICROSOFT",
      icon: "MS",
      certifications: [
        "Use AI for Everyday Tasks",
        "Explore Internet Search and Beyond",
      ],
    },
    {
      provider: "LinkedIn",
      short: "LINKEDIN",
      icon: "IN",
      certifications: [
        "AI-Driven Excellence – LinkedIn Hiring Assistant Assessment",
        "Recruiter Assessment",
      ],
    },
    {
      provider: "NextInHR",
      short: "NEXTINHR",
      icon: "NH",
      certifications: [
        "AI-Powered Recruiter Certification",
        "Talent Acquisition Certification",
        "Recruitment Analytics Professional Certification",
        "Candidate Sourcing Certification",
        "Recruitment Automation Certification",
        "Executive Search Specialist Certification",
        "ATS & Talent Acquisition Expert Certification",
        "Recruiting CRM Specialist Certification",
        "Multilingual Recruitment Specialist Certification",
        "DEI Hiring Certification",
      ],
    },
    {
      provider: "SalaryBox",
      short: "SALARYBOX",
      icon: "SB",
      certifications: [
        "Advanced Recruitment Strategies",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const activeGroup = certificationGroups[activeIndex];

  const previousProvider = () => {
    setActiveIndex((current) =>
      current === 0
        ? certificationGroups.length - 1
        : current - 1
    );
  };

  const nextProvider = () => {
    setActiveIndex((current) =>
      current === certificationGroups.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        <span className="section-tag">
          CERTIFICATIONS
        </span>

        <h2 className="certifications-title">
          Continuous Learning.
          <br />
          <span>Continuous Growth.</span>
        </h2>

        <p className="certifications-intro">
          Professional certifications across AI, recruiting,
          talent acquisition, and modern technology platforms.
        </p>

        {/* PROVIDER NAVIGATION */}

        <div className="provider-selector">

          {certificationGroups.map((group, index) => (
            <button
              key={group.provider}
              type="button"
              className={`provider-selector-item ${
                activeIndex === index ? "selected" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="provider-icon">
                {group.icon}
              </span>

              <span className="provider-name">
                {group.short}
              </span>

              <span className="provider-count">
                {group.certifications.length}
              </span>
            </button>
          ))}

        </div>

        {/* MAIN CERTIFICATION SHOWCASE */}

        <div className="certification-carousel">

          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            onClick={previousProvider}
            aria-label="Previous certification provider"
          >
            ‹
          </button>

          <div className="certification-showcase">

            <span className="provider-label">
              VERIFIED LEARNING
            </span>

            <div className="provider-visual">
              <div className="provider-orbit orbit-one" />
              <div className="provider-orbit orbit-two" />

              <div className="provider-core">
                {activeGroup.icon}
              </div>
            </div>

            <h3 className="active-provider">
              {activeGroup.provider}
            </h3>

            <div className="certification-count">
              {activeGroup.certifications.length}{" "}
              {activeGroup.certifications.length === 1
                ? "Certification"
                : "Certifications"}
            </div>

            <div className="certification-pills">

              {activeGroup.certifications.map(
                (certification, index) => (
                  <div
                    key={certification}
                    className="interactive-cert"
                    style={{
                      animationDelay: `${index * 0.06}s`,
                    }}
                  >
                    <span className="cert-dot" />
                    {certification}
                  </div>
                )
              )}

            </div>

          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            onClick={nextProvider}
            aria-label="Next certification provider"
          >
            ›
          </button>

        </div>

        {/* PROGRESS */}

        <div className="carousel-progress">

          {certificationGroups.map((group, index) => (
            <button
              key={group.provider}
              type="button"
              className={`progress-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${group.provider} certifications`}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;