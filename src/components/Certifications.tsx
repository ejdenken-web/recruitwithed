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

  const nextProvider = () => {
    setActiveIndex(
      (current) =>
        (current + 1) % certificationGroups.length
    );
  };

  const previousProvider = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + certificationGroups.length) %
        certificationGroups.length
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
          <span>Modern Expertise.</span>
        </h2>

        <p className="certifications-intro">
          Professional certifications across artificial intelligence,
          recruiting, talent acquisition, and modern technology
          platforms.
        </p>

        <div className="certification-carousel">

          <button
            type="button"
            className="carousel-arrow"
            onClick={previousProvider}
            aria-label="Previous certification provider"
          >
            ←
          </button>

          <div className="certification-showcase">

            <span className="provider-label">
              
            </span>

            <h3 className="active-provider">
              {activeGroup.provider}
            </h3>

            <div className="certification-pills">
              {activeGroup.certifications.map(
                (certification) => (
                  <div
                    className="interactive-cert"
                    key={certification}
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
            →
          </button>

        </div>

        <div className="provider-selector">
          {certificationGroups.map(
            (group, index) => (
              <button
                type="button"
                key={group.provider}
                className={
                  index === activeIndex
                    ? "provider-selector-item selected"
                    : "provider-selector-item"
                }
                onClick={() => setActiveIndex(index)}
              >
                {group.provider}
              </button>
            )
          )}
        </div>

        <div className="carousel-progress">
          {certificationGroups.map(
            (group, index) => (
              <button
                type="button"
                key={group.provider}
                className={
                  index === activeIndex
                    ? "progress-dot active"
                    : "progress-dot"
                }
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${group.provider} certifications`}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}

export default Certifications;