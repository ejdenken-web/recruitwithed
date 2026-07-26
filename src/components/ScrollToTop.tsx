import { useEffect, useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <button
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      ↑
    </button>
  );
}

export default ScrollToTop;