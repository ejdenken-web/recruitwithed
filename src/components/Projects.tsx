import "./Projects.css";

function Projects() {

const projects = [

{
title:"RecruitWithEd",
subtitle:"Personal Recruiting Portfolio",
status:"LIVE PROJECT",
description:"Designed and developed my personal recruiting portfolio showcasing recruiting experience, AI certifications, supported organizations, featured projects, and a modern AI-assisted recruiting approach.",
tech:[
"React",
"TypeScript",
"Vite",
"GitHub",
"Vercel"
]
},

{
title:"Chhota Bheem Portfolio",
subtitle:"Professional Animation Portfolio",
status:"AVAILABLE UPON REQUEST",
description:"Designed and developed a modern portfolio website for an animation professional who contributed to the Chhota Bheem franchise. The project highlights artwork, career achievements, and portfolio presentation with assistance from Claude AI.",
tech:[
"React",
"TypeScript",
"Claude AI",
"Netlify"
]
}

];

return(

<section
id="projects"
className="projects"
>

<div className="projects-container">

<div className="projects-header">

<p>FEATURED PROJECTS</p>

<h2>
Recent Work
</h2>

<span>

A selection of projects that demonstrate my passion for recruiting,
AI-assisted workflows, and modern web development.

</span>

</div>

<div className="projects-grid">

{projects.map(project=>(

<div
key={project.title}
className="project-card"
>

<div className="project-status">
{project.status}
</div>

<h3>
{project.title}
</h3>

<h4>
{project.subtitle}
</h4>

<p>
{project.description}
</p>

<div className="tech-stack">

{project.tech.map(item=>(

<span key={item}>
{item}
</span>

))}

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default Projects;