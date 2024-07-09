import "./nav.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "../Home";
import Credit from "../../Pages/Credit/Credit";
// import Creator from "../Creators/Creator";
// import Showcase from "../../Pages/Showcase/Showcase";
import StayTune from "../../Pages/StayTune/StayTune";
import Students from "../../Pages/Students/Students";
import Project from "../../Pages/Projects/Projects";

function Nav2() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const [title, setTitle] = useState("syn2sign");
  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname);

    // Update the title based on the current route
    switch (pathname) {
      case "/":
        setTitle("syn2sign senior project exhibition 2024 - Home Page");
        break;
      case "/showcase":
        setTitle("Showcase - syn2sign senior project exhibition 2024");
        break;
      case "/exhibition":
        setTitle("Exhibition - syn2sign senior project exhibition 2024");
        break;
      case "/credit":
        setTitle("Credit - syn2sign senior project exhibition 2024");
        break;
      case "/stay-tune":
        setTitle("Stay Tune - syn2sign senior project exhibition 2024");
        break;
      default:
        setTitle("syn2sign senior project exhibition 2024");
    }
  }, [location]);


  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname);
  }, [location]);

  const menuClick = () => {
      setMenuOpen(!menuOpen);
      document.body.classList.toggle("menuClick");
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="header-section">
          <div className="bg-gd-head"></div>
          <nav className="navbar navbar-expand-xl sticky-top bg-trans">
            <div className="pt-3 container container-1360 position-relative">
              <div className="navbar-brand">
                <Link className="me-3" to="/">
                  <img
                    src="/public/s2s-logo/syn2sign_logo.svg"
                    alt="syn2sign_logo"
                  />
                </Link>
                <a
                  href="http://ict.su.ac.th/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <picture>
                    <source
                      media="(max-width:767.98px)"
                      srcSet="/public/s2s-logo/su_logo_sm.svg"
                      type="image/svg+xml"
                    />
                    <source
                      media="(min-width:767.98px)"
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
              <div className="btn-menu" onClick={menuClick}>
                <div className="groupMenu">
                  <span className="pan1"></span> <span className="pan2"></span>
                  <span className="pan3"></span>
                </div>
              </div>

              <div
                className={`navbar-collapse ${menuOpen ? "show" : ""}`}
                id="navbarText"
              >
                <ul className="navbar-nav nav-r txt-upper ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className={`link-nav ${
                        activeLink === "/" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveLink("/");
                        menuClick();
                      }}
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
                      onClick={() => {
                        setActiveLink("/showcase");
                        menuClick();
                      }}
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
                      onClick={() => {
                        setActiveLink("/exhibiton");
                        menuClick();
                      }}
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
                      onClick={() => {
                        setActiveLink("/credit");
                        menuClick();
                      }}
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
                      onClick={() => {
                        setActiveLink("/stay-tune");
                        menuClick();
                      }}
                    >
                      STAY TUNE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Project />} />
            <Route path="/exhibiton" element={<Students />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/stay-tune" element={<StayTune />} />
          </Routes>
        </div>
      </HelmetProvider>
    </>
  );
}

export default Nav2;
