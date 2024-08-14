import { useState, useEffect } from "react";
import "./scrolltop.css"
import { FiArrowUpCircle } from "react-icons/fi";


export const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  });

  return (
    <>
      {showScroll && (
        <button onClick={scrollTop} className="scrollTop">
          {/* <img src="/icon/circle-up.svg" alt="scrolll icon" style={{ width: "1.5em" }} /> */}
          <FiArrowUpCircle className="scroll"/>
        </button>
      )}
    </>
  );
}
