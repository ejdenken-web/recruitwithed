import { useState } from "react";
import "./Certifications.css";

function Certifications() {
  const certificationGroups = [
    {
      provider: "Anthropic",
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
      certifications: [
        "Introduction to LangGraph – Python",
        "Introduction to LangSmith Deployment",
        "Autonomous Agent Improvement with LangSmith Engine",
      ],
    },
    {
      provider: "Microsoft",
      certifications: [
        "Use AI for Everyday Tasks",
        "Explore Internet Search and Beyond",
      ],
    },
    {
      provider: "LinkedIn",
      certifications: [
        "AI-Driven Excellence – LinkedIn Hiring Assistant Assessment",
        "Recruiter Assessment",
      ],
    },
    {
      provider: "NextInHR",
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

  const isNextInHR = activeGroup.provider === "NextInHR";

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

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
              {group.provider}
            </button>
          ))}
        </div>

        <div className="certification-carousel">

          <button
            type="button"
            className="carousel-arrow"
            onClick={previousProvider}
            aria-label="Previous certification provider"
          >
            ‹
          </button>

          <div className="certification-showcase">

            <div className="provider-visual">
              <div className="provider-orbit orbit-one" />
              <div className="provider-orbit orbit-two" />
              <div className="provider-core" />
            </div>

            <h3 className="active-provider">
              {activeGroup.provider}
            </h3>

            <div
              className={`certification-pills ${
                isNextInHR
                  ? "nextinhr-certifications"
                  : ""
              }`}
            >
              {activeGroup.certifications.map(
                (certification, index) => (
                  <div
                    key={certification}
                    className="interactive-cert"
                    style={{
                      animationDelay: `${index * -0.35}s`,
                    }}
                  >
                    {certification}
                  </div>
                )
              )}
            </div>

          </div>

          <button
            type="button"
            className="carousel-arrow"
            onClick={nextProvider}
            aria-label="Next certification provider"
          >
            ›
          </button>

        </div>

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