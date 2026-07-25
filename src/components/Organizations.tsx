import "./Organizations.css";

function Organizations() {

const companies = [

"Accenture",
"AbbVie",
"Abercrombie & Fitch",
"Bahwan CyberTek",
"Bayer",
"Birlasoft",
"BNP Paribas",
"Caterpillar",
"Cleartelligence",
"Exeter Finance",
"Fifth Third Bank",
"Genpact",
"Gibson",
"HanesBrands",
"HCL America",
"Innova Solutions",
"JetBlue Airways",
"John Deere",
"Kellogg's",
"LTIMindtree",
"Lululemon",
"Nomura",
"PwC",
"Schneider Electric",
"Speedway",
"TCS",
"Tech Mahindra",
"Toyota",
"Victoria's Secret",
"Wells Fargo"

];

return(

<section
id="clients"
className="organizations"
>

<div className="org-container">

<div className="org-heading">

<p>CLIENTS</p>

<h2>
Organizations I've Supported
</h2>

</div>

<p className="org-subtitle">

Throughout my recruiting career, I have supported hiring initiatives
across global consulting firms, Fortune 500 organizations,
technology companies, healthcare, financial services,
manufacturing, retail, aviation, and engineering.

</p>

<div className="org-grid">

{companies.map((company)=>(

<div
className="org-card"
key={company}
>

<h3>{company}</h3>

</div>

))}

</div>

</div>

</section>

)

}

export default Organizations; 