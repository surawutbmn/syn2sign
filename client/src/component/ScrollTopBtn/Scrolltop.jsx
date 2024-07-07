import { useState, useEffect } from "react";
import "./scrolltop.css"

function ScrollTop(){
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
          <img src="/icon/circle-up.svg" alt="" style={{ width: "1.5em" }} />
        </button>
      )}
    </>
  );
}

export default ScrollTop;