import { useEffect, useState } from "react";
import "./PageLoader.css";

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-screen">

      <div className="loader-box">

        <div className="loader-circle"></div>

        <h2>RecruitWithEd</h2>

        <p>Loading Portfolio...</p>

      </div>

    </div>
  );
}

export default PageLoader;