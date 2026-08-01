import "./Services.css";
import IconCard from "./IconCard";

import {
  Search,
  Users,
  BriefcaseBusiness,
  Target,
} from "lucide-react";

function Services() {
  return (
    <section id="services" className="services">

      <div className="services-header">

        <span className="section-tag">
          SERVICES
        </span>

        <h2>
          How I Help Organizations
        </h2>

        <p>
          Supporting organizations with strategic talent acquisition,
          meaningful candidate engagement, and hiring partnerships that
          create long-term success.
        </p>

      </div>


      <div className="services-grid">

        <IconCard
          icon={<Search size={34} />}
          title="Talent Acquisition"
          description="Identifying and connecting organizations with qualified professionals through focused recruiting strategies."
        />


        <IconCard
          icon={<Users size={34} />}
          title="Candidate Engagement"
          description="Building strong relationships with candidates through communication, trust, and a personalized approach."
        />


        <IconCard
          icon={<BriefcaseBusiness size={34} />}
          title="Executive Search"
          description="Supporting leadership hiring through targeted outreach and strategic candidate identification."
        />


        <IconCard
          icon={<Target size={34} />}
          title="Talent Advisory"
          description="Helping organizations understand hiring needs, market conditions, and effective recruitment approaches."
        />

      </div>

    </section>
  );
}

export default Services;