/* =========================================================
   RECRUITWITHED — CERTIFICATIONS
   ========================================================= */

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
   
           <p className="certifications-intro">
             Professional certifications across artificial intelligence,
             recruiting, talent acquisition, and modern technology
             platforms.
           </p>
   
           <div className="floating-certification-stage">
   
             <button
               type="button"
               className="floating-provider provider-one"
               onClick={() => setActiveIndex(0)}
               data-active={activeIndex === 0}
             >
               Anthropic
             </button>
   
             <button
               type="button"
               className="floating-provider provider-two"
               onClick={() => setActiveIndex(1)}
               data-active={activeIndex === 1}
             >
               LangChain
             </button>
   
             <button
               type="button"
               className="floating-provider provider-three"
               onClick={() => setActiveIndex(2)}
               data-active={activeIndex === 2}
             >
               Microsoft
             </button>
   
             <button
               type="button"
               className="floating-provider provider-four"
               onClick={() => setActiveIndex(3)}
               data-active={activeIndex === 3}
             >
               LinkedIn
             </button>
   
             <button
               type="button"
               className="floating-provider provider-five"
               onClick={() => setActiveIndex(4)}
               data-active={activeIndex === 4}
             >
               NextInHR
             </button>
   
             <button
               type="button"
               className="floating-provider provider-six"
               onClick={() => setActiveIndex(5)}
               data-active={activeIndex === 5}
             >
               SalaryBox
             </button>
   
             <div className="certification-center">
   
               <div className="certification-center-provider">
                 {activeGroup.provider}
               </div>
   
               <div className="certification-list">
                 {activeGroup.certifications.map(
                   (certification) => (
                     <div
                       className="floating-certification"
                       key={certification}
                     >
                       {certification}
                     </div>
                   )
                 )}
               </div>
   
               <div className="certification-controls">
   
                 <button
                   type="button"
                   className="certification-arrow"
                   onClick={previousProvider}
                   aria-label="Previous certification provider"
                 >
                   ←
                 </button>
   
                 <div className="certification-dots">
                   {certificationGroups.map(
                     (group, index) => (
                       <button
                         type="button"
                         key={group.provider}
                         className={
                           index === activeIndex
                             ? "certification-dot active"
                             : "certification-dot"
                         }
                         onClick={() =>
                           setActiveIndex(index)
                         }
                         aria-label={`Show ${group.provider} certifications`}
                       />
                     )
                   )}
                 </div>
   
                 <button
                   type="button"
                   className="certification-arrow"
                   onClick={nextProvider}
                   aria-label="Next certification provider"
                 >
                   →
                 </button>
   
               </div>
   
             </div>
   
           </div>
   
         </div>
       </section>
     );
   }
   
   export default Certifications;