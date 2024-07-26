import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../Home";
// import Credit from "../../Pages/Credit/credit";
import Creator from "../Creators/Creator";
import Showcase from "../../Pages/Showcase/Showcase";
import StayTune from "../../Pages/StayTune/StayTune";
import "./nav.css";

function Navs() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
 //test
  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname);
  }, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-trans p-4">
        <div className="bg-gd-head"></div>
        <div className="container px-4">
          <div className="navbar-brand">
            <a className="me-3 nav-logo">
              <Link to="/">
                <img
                  src="/public/s2s-logo/syn2sign_logo.svg"
                  alt="syn2sign_logo"
                />
              </Link>
            </a>
            <a
              className=""
              href="http://ict.su.ac.th/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <picture>
                <source
                  media="(max-width:768px)"
                  srcSet="/public/s2s-logo/su_logo_sm.svg"
                  type="image/svg+xml"
                />
                <source
                  media="(min-width:768.5px)"
                  srcSet="/public/s2s-logo/su_logo.svg"
                  type="image/svg+xml"
                />
                <img
                  src="/public/s2s-logo/su_logo.svg"
                  alt="ict_silpakorn_logo"
                />
              </picture>
            </a>
          </div>
          <div className="d-flex">
            <ul className="d-flex nav-r bg-trans txt-upper">
              <li className="nav-item ">
                <Link
                  to="/"
                  className={`link-nav ${activeLink === "/" ? "active" : ""}`}
                >
                  SYN2SIGN
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/showcase"
                  className={`link-nav ${
                    activeLink === "/showcase" ? "active" : ""
                  }`}
                >
                  Showcase
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/exhibiton"
                  className={`link-nav ${
                    activeLink === "/exhibiton" ? "active" : ""
                  }`}
                >
                  exhibition
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/credit"
                  className={`link-nav ${
                    activeLink === "/credit" ? "active" : ""
                  }`}
                >
                  CREDIT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/stay-tune"
                  className={`link-nav ${
                    activeLink === "/stay-tune" ? "active" : ""
                  }`}
                >
                  STAY TUNE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/exhibiton" element={<Creator />} />
          {/* <Route path="/credit" element={<Credit />} /> */}
          <Route path="/stay-tune" element={<StayTune />} />
        </Routes>
      </div>
    </>
  );
}

export default Navs;
